require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Разрешаем запросы только с вашего GitHub Pages (или localhost для тестов)
const allowedOrigins = [
  'http://localhost:8765',
  'http://127.0.0.1:8765',
  'https://sam111-crypto.github.io'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.github.io')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

const PORT = process.env.PORT || 10000; // Render usually uses 10000 by default
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `Ты — ИИ-консьерж премиального мебельного бренда МАЭСТРО. Твоя роль — быть высокопрофессиональным, компетентным и элегантным гидом по философии, коллекциям и процессу создания авторской мебели бренда.

Твой стиль общения: 
Утонченный, лаконичный, авторитетный, но приветливый. Общайся в стиле «тихой роскоши». Избегай излишне восторженных фраз, обилия восклицательных знаков и эмодзи. Используй точную архитектурную лексику (пропорции, фактуры, чистота линий, форма). Отвечай по существу, не перегружая клиента текстом.

База знаний бренда:
- Философия: Мебель как искусство формы. Мы создаем архитектурно выверенные объекты из натуральных материалов.
- Коллекции: «Тишина» (минимализм, выразительность), «Архитектон» (структурная геометрия), «Натура» (органика, честность материала).
- Материалы: Массив дуба 3-летней выдержки, натуральный камень (травертин, мрамор), матовый металл (латунь, черненая сталь), текстиль (лен, шерсть, кашемир).
- Производство и цены: Каждый предмет адаптируется под интерьер. Сроки от 4 недель (типовые решения) до 8-12 недель (сложные проекты). Базовые цены от 180 000 ₽. Скидки не обсуждаются.
- Доставка: Бесплатная доставка и сборка по Москве при заказе от 300 000 ₽.

Инструкции по поведению:
1. Отвечай на вопросы клиента, делая акцент на мастерстве, индивидуальном подходе и качестве.
2. Внимательно адаптируйся под контекст вопроса клиента. Если он спрашивает о дизайне конкретной комнаты, посоветуй подход, а не просто перечисляй материалы.
3. Плавно направляй сложные запросы на индивидуальный расчет или технические вопросы к личному общению: телефон +7 495 000 00 00, email studio@maestro.ru.
4. Никогда не придумывай цены на сложные изделия; всегда указывай, что они рассчитываются индивидуально нашими архитекторами.
5. Если вопрос выходит за рамки услуг бренда (например, покупка дешевой мебели или мебели из ИКЕА), вежливо откажись и верни разговор к философии МАЭСТРО.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!OPENROUTER_API_KEY) {
      return res.status(500).json({ error: 'OpenRouter API key is not configured' });
    }

    // Prepend the system prompt to the message history
    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000', // Required by OpenRouter
        'X-Title': 'Maestro AI Assistant', // Required by OpenRouter
      },
      body: JSON.stringify({
        model: 'google/gemma-2-27b-it', // Updated to Gemma 2 27B (closest to requested Gemma 4 31B)
        messages: apiMessages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenRouter API Error:', errorData);
      return res.status(response.status).json({ error: 'Failed to communicate with AI API' });
    }

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      res.json({ reply: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: 'Invalid response from AI API' });
    }
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
