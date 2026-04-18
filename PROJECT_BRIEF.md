# МАЭСТРО — Luxury Furniture Brand Landing Page

## Проектная инструкция

> Этот документ — единый источник правды для всей разработки.
> Каждое решение по дизайну, коду и контенту сверяется с этим файлом.

---

## 1. Сущность проекта

**Что:** одностраничный landing page luxury мебельного бренда «МАЭСТРО».

**Формат:** cinematic digital presentation — не интернет-магазин, а визуально-режиссёрская brand story уровня luxury interior campaign.

**Ощущение:** пересечение luxury furniture brand × cinematic editorial × architectural minimalism × collectible design × premium interior direction.

**Главный критерий качества:** сайт должен выглядеть так, будто его делали top-tier арт-директор, luxury web studio и motion-дизайнер — а не стандартный AI-генератор.

---

## 2. Язык и локализация

- Весь контент строго на **русском языке**
- Все шрифты — только с полной **кириллической** поддержкой
- Тон текста: спокойный, уверенный, статусный, эстетичный
- Запрещены: рекламная пошлость, канцелярит, маркетинговые клише, «AI copy»

---

## 3. Визуальная эстетика

### Ключевые слова стиля
- cinematic luxury
- quiet luxury
- editorial interiors
- sculptural furniture
- natural materials
- soft daylight
- gallery-grade presentation
- refined atmosphere
- premium restraint

### Запрещённая эстетика
- generic SaaS / стартап-стиль
- шаблонные AI-блоки
- дешёвые градиенты
- glowing UI
- e-commerce «в лоб»
- «просто минимализм» без атмосферы
- визуальная тесноты

---

## 4. Палитра

### Основная палитра (светлая, сложная, статусная)

| Роль | Цвет | HEX (ориентир) |
|------|-------|-----------------|
| Фон основной | тёплый молочный | `#FAF7F2` |
| Фон вторичный | мягкий ivory | `#F5F0E8` |
| Фон акцентный | stone beige | `#E8E0D4` |
| Поверхность | linen | `#EDE7DD` |
| Нейтральный | светлый taupe | `#C4B8A8` |
| Подтекст | пыльный серо-бежевый | `#A89B8C` |
| Текст вторичный | матовый песочный | `#8A7E6E` |
| Текст основной | тёмный акцент | `#3A342C` |
| Акцент глубокий | тёплый уголь | `#2A2420` |

### Принципы палитры
- Создавать ощущение: свет, воздух, премиальные материалы, интерьерный журнал
- Избегать: холодной стерильности, слишком белого фона, кричащих акцентов, digital-кислоты, неоправданных тяжёлых чёрных блоков

---

## 5. Типографика

### Требования к шрифтам
- Полная поддержка кириллицы
- Визуально дорогие, не банальные
- Крупная, уверенная, воздушная, эстетская подача
- Продуманный контраст размеров
- Ритм как у luxury editorial headlines

### Шрифтовая система

| Роль | Шрифт | Источник |
|------|-------|----------|
| Display (hero, заголовки) | **Cormorant Garamond** (Light/Regular) | Google Fonts |
| Body (основной текст) | **Raleway** (Light/Regular) | Google Fonts |
| Accent (навигация, метаданные, подписи) | **Raleway** (spacing: +0.15em, uppercase, 300wt) | Google Fonts |

### Типографическая шкала

```
Hero headline:       clamp(3.5rem, 8vw, 8rem)    — Cormorant, 300
Section headline:    clamp(2.2rem, 4.5vw, 4.5rem) — Cormorant, 400
Sub-headline:        clamp(1.4rem, 2.5vw, 2rem)   — Cormorant, 400
Body large:          clamp(1.1rem, 1.3vw, 1.25rem) — Raleway, 300
Body:                clamp(0.95rem, 1.1vw, 1.05rem) — Raleway, 300
Caption / meta:      clamp(0.7rem, 0.85vw, 0.85rem) — Raleway, 300, uppercase, tracking +0.15em
Nav links:           0.8rem — Raleway, 400, uppercase, tracking +0.2em
```

---

## 6. Композиция и сетка

### Принципы
- Много воздуха — каждый блок «дышит»
- Большие поля (padding секций: 10vh–15vh вертикально)
- Асимметрия там, где она делает композицию дороже
- Gallery-like pacing между секциями
- Строгая базовая сетка с осмысленными нарушениями
- Мощные крупные планы

### Сетка
- Максимальная ширина контента: `1400px`
- Боковые отступы: `clamp(2rem, 5vw, 6rem)`
- 12-колоночная система для desktop
- Vertical rhythm baseunit: `8px`

---

## 7. Структура (narrative flow)

Не шаблонная последовательность, а режиссёрская история бренда:

### 7.1 — Навигация
- Фиксированная, прозрачная, проявляется при скролле
- Логотип слева, minimal-nav справа
- Hover-состояния с understated elegance
- Трансформация при скролле: blur-фон, компактный размер

### 7.2 — Hero (экран 1)
- Полноэкранный cinematic hero
- Крупная кинематографичная типографика (2–3 строки max)
- Layered composition: текст + мебельная сцена + свет
- Мягкое движение: параллакс слоёв, slow reveal типографики
- Тонкий scroll-indicator

### 7.3 — Философия бренда (экран 2)
- Короткий, ёмкий текст о подходе к форме, свету, материалу
- Большой типографический акцент (pull-quote стиль)
- Рядом — деталь мебели крупным планом
- Асимметричная двухколоночная компоновка

### 7.4 — Коллекции (экран 3)
- 3–4 направления / коллекции
- Горизонтальная или staggered gallery
- Крупные image-карточки с overlay-типографикой
- Hover: масштабирование + reveal дополнительной информации
- Ощущение editorial spread

### 7.5 — Материальность (экран 4)
- Визуальный рассказ о материалах: дерево, камень, металл, текстиль
- Macro-фотографии текстур
- Split-screen или layered reveal
- Текст как подпись к визуалу, не наоборот

### 7.6 — Featured pieces (экран 5)
- 2–3 ключевых предмета мебели
- Full-bleed изображения
- Минимальный текст: название + одна строка
- Cinematic presentation: каждый предмет как art object
- Parallax depth при скролле

### 7.7 — Интерьерная презентация (экран 6)
- Иммерсивная full-screen секция
- Мебель в контексте реального интерьера
- Ощущение: ты заходишь в luxury showroom
- Плавная анимация при скролле (image sequence или parallax layers)

### 7.8 — Пространство (экран 7)
- Как мебель формирует пространство
- Cinematic split: до/после или контекст/деталь
- Философский, но конкретный текст

### 7.9 — CTA + Footer (экран 8)
- Premium call-to-action: не кнопка «Купить», а приглашение к диалогу
- Элегантный footer с контактами и минимальной навигацией
- Ощущение завершённости, а не обрыва

---

## 8. Система анимаций (Cinematic Motion Language)

### Принципы
- Полноценная motion language, а не набор эффектов
- Ощущение: дорогая режиссура, интерьерная съёмка, luxury digital craft
- Физичность и вес
- Плавная связность между секциями

### Инструментарий
- **GSAP 3** + ScrollTrigger — основной движок
- CSS transitions — для hover и микро-состояний
- Intersection Observer — как fallback-механика

### Паттерны анимаций

| Элемент | Анимация | Параметры |
|---------|----------|-----------|
| Hero текст | Staggered letter/word reveal | duration: 1.2s, ease: power3.out, stagger: 0.04 |
| Hero изображение | Scale from 1.05 → 1.0 + fade | duration: 1.8s, ease: power2.out |
| Секции | Parallax layers при скролле | scrub: 1, speed: variable per layer |
| Заголовки | Clip-path reveal (снизу вверх) | duration: 0.9s, ease: power2.out |
| Текстовые блоки | Fade + translate Y (20px → 0) | duration: 0.8s, ease: power2.out, delay: 0.15 |
| Изображения | Mask reveal (horizontal wipe) | duration: 1.2s, ease: power3.inOut |
| Карточки коллекций | Staggered entrance | stagger: 0.12, duration: 0.8s |
| Hover на карточках | Scale 1.02 + shadow deepen | duration: 0.5s, ease: power1.out |
| Навигация | Backdrop-filter появление | duration: 0.4s |
| Переходы между секциями | Subtle depth shift | continuous scrub |

### Timing principles
- Минимальная duration: `0.4s`
- Стандартная duration: `0.8s–1.2s`
- Hero animations: `1.2s–2.0s`
- Easing: преимущественно `power2.out`, `power3.out` — никогда `linear`
- Scroll scrub: `true` или `1` для parallax

### Запрещённые анимации
- Дешёвый overscroll show-off
- Агрессивный 3D ради 3D
- Слишком быстрые анимации (< 0.3s для content reveals)
- Банальный fade-up на всём подряд без вариации
- Bouncing, elastic easing
- Перегруженность motion-эффектами

---

## 9. Hover и интерактивные состояния

- Кнопки: underline grow / background fill с transition 0.4s
- Навигация: opacity shift + subtle underline
- Карточки: scale 1.02 + shadow shift
- Ссылки: color transition + letter-spacing micro-shift
- Cursor: custom cursor не обязателен, но если есть — минималистичный

---

## 10. Адаптивность

### Breakpoints
```
Desktop:    1200px+
Tablet:     768px – 1199px
Mobile:     < 768px
```

### Адаптивные принципы
- Desktop: полная cinematic experience
- Tablet: сохранить воздух, упростить сетку до 2 колонок max
- Mobile: single column, сохранить типографический масштаб, анимации упрощены (но не убраны)
- Touch: увеличить tap-зоны до 48px min
- Изображения: responsive, webp/avif с fallback, lazy loading

---

## 11. Изображения и визуал

### Подход
Поскольку реальных фотографий нет, используем:
- CSS-градиенты и shapes как placeholder-визуалы с материальной текстурой
- SVG-элементы для декоративных деталей
- Pseudo-элементы для создания «фотографичных» зон
- Aspect-ratio контейнеры с rich background treatment

### Принципы замещения
- Каждый image-placeholder должен передавать: материальность, свет, текстуру
- Использовать gradient overlays, noise textures, subtle patterns
- Не оставлять пустые серые прямоугольники
- Placeholder должен ощущаться как часть дизайна, не как «тут будет фото»

---

## 12. Технический стек

| Компонент | Решение |
|-----------|---------|
| HTML | Семантический HTML5 |
| CSS | Vanilla CSS с custom properties |
| JavaScript | Vanilla JS + GSAP 3 |
| Анимации | GSAP + ScrollTrigger (CDN) |
| Шрифты | Google Fonts (Cormorant Garamond + Raleway) |
| Сборка | Один HTML-файл (self-contained) |
| Деплой | Статический файл, открывается в браузере |

### Структура файлов
```
/
├── index.html          — весь markup, styles, scripts inline
├── PROJECT_BRIEF.md    — этот документ
```

Всё в одном файле для максимальной портативности. Стили — в `<style>`, скрипты — в `<script>` перед `</body>`.

---

## 13. Performance

- First Contentful Paint: < 1.5s
- Шрифты: `font-display: swap`, preconnect к Google Fonts
- GSAP: загрузка с CDN, defer
- Анимации: `will-change` только на активных элементах, `transform` вместо `top/left`
- `prefers-reduced-motion`: уважать, отключать parallax и complex reveals

---

## 14. Контент-гайд

### Тон голоса
- Сдержанная уверенность
- Нет восклицательных знаков
- Нет превосходных степеней без повода
- Короткие фразы, точные слова
- Литературный, но не манерный
- Продаёт ощущение, не товар

### Примеры хорошего текста
- «Форма, продиктованная светом»
- «Каждый предмет — результат диалога между мастером и материалом»
- «Пространство начинается с объекта»

### Примеры плохого текста
- «Лучшая мебель для вашего дома!»
- «Эксклюзивные предложения»
- «Мы создаём мебель премиум-класса»
- Всё, что звучит как рекламный баннер

---

## 15. Чеклист качества перед финализацией

- [ ] Все тексты на русском
- [ ] Кириллица отображается корректно во всех шрифтах
- [ ] Hero выглядит как premium cinematic shot
- [ ] Палитра тёплая, светлая, без холодной стерильности
- [ ] Типографика крупная, воздушная, с хорошим ритмом
- [ ] Анимации плавные, с ощущением веса и физичности
- [ ] Нет ни одного «generic» блока
- [ ] Каждая секция «дышит» — достаточно воздуха
- [ ] Hover-состояния проработаны
- [ ] Mobile-версия сохраняет luxury-ощущение
- [ ] Нет дешёвых эффектов, glowing UI, кислотных акцентов
- [ ] Навигация фиксированная с трансформацией при скролле
- [ ] Footer премиальный, не обрывистый
- [ ] GSAP анимации работают корректно
- [ ] `prefers-reduced-motion` учтён
- [ ] Шрифты загружаются с swap
- [ ] Семантический HTML
- [ ] Нет console errors

---

## 16. Процесс разработки

1. **Фаза 1:** Структура HTML + навигация + hero
2. **Фаза 2:** CSS-система (custom properties, типографика, сетка, палитра)
3. **Фаза 3:** Все секции — markup + стили
4. **Фаза 4:** GSAP-анимации (hero → scroll → hovers → transitions)
5. **Фаза 5:** Адаптивность (tablet + mobile)
6. **Фаза 6:** Polish (детали, hover-states, spacing, финальная проверка)

---

*Документ создан как исполнительная инструкция. Все решения в процессе разработки должны проверяться на соответствие этим принципам.*

---

## 17. Типографический и анимационный рефакторинг (Tailwind + GSAP)

В рамках будущего развития проекта (при переходе на Tailwind CSS) внедряются следующие новые стандарты:

### 17.1. Типографическая система (tailwind.config.js)
- **Цвета:**
  - `background`: `#0a0a0a`
  - `surface`: `#121212`
  - `primary`: `#f4f4f5` (основной текст)
  - `accent`: `#9BB8A9` (акцентный цвет)
- **Шрифты:**
  - `font-sans`: **Unbounded**, sans-serif (основной шрифт, uppercase с `tracking-[0.2em]`)
  - `font-serif`: **Playfair Display**, serif (декоративный italic для акцентов)
  - `font-mono`: **JetBrains Mono**, monospace (для микро-лейблов и технических элементов)

### 17.2. Принципы типографики
- **Hero заголовок (крупная типографика):** `font-sans`, `font-bold`, `uppercase`, сверхплотный интерлиньяж `leading-[1.05]` или `[0.95]`, `tracking-tight`. Размеры до `text-[6.5rem]`.
- **Декоративный акцент:** `font-serif`, `italic`, `lowercase`, экстремально плотный `leading-[0.8]`, акцентный цвет `#CBBE9A`. Размеры до `text-[9.5rem]`.
- **Основной текст:** `font-sans`, `font-light`, `tracking-wide`, `leading-relaxed`, `text-primary/90`.
- **Микро-лейблы:** `text-[10px]`, `uppercase`, `tracking-widest`, `font-mono`, `text-primary/40`.

### 17.3. Интерактивные элементы и анимации
- **Базовые параметры:** 
  - Основная кривая: `ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`
  - Длительность для плавных эффектов: `duration-[800ms]`
- **Главная CTA "Liquid Magnet":**
  - Кнопка с эффектом внешнего свечения при hover (через `blur-2xl` и градиент к `opacity-100`).
  - Внутренняя "жидкая" заливка снизу вверх (трансформация `translate-y-[110%] rounded-[100%]` в `translate-y-[0%] rounded-[0%]`).
  - Текст внутри кнопки инвертирует цвет (`text-primary` → `text-background`) с задержкой `delay-75` и `duration-[400ms]`.
- **Вторичные ссылки:**
  - Линия подчёркивания, выезжающая слева направо (используя `after:max-w-0 hover:after:max-w-full`).
- **Навигация:**
  - Подчёркивание расширяется из центра (`left-1/2 -translate-x-1/2` от `max-w-0` до `max-w-[40%]`).

### 17.4. GSAP Анимации (Маскированный reveal)
- **Hero-текст:** Текст выезжает снизу с лёгким вращением.
  - Начало: `{ y: "120%", rotateZ: 5 }`
  - Конец: `{ y: "0%", rotateZ: 0, duration: 1.4, stagger: 0.15, ease: "power4.out" }`
- **Fade-in подзаголовков:**
  - Начало: `{ y: 30, opacity: 0 }`
  - Конец: `{ y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }`
