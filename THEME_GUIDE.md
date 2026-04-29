# Desktop Board: темы оформления

Этот документ объясняет, как применить, создать и передать тему Desktop Board.
Тема меняет внешний вид доски: цвета, скругления, тени, размер иконок карточек и внешний вид соединений.

## Что можно изменить

Сейчас тема может настраивать:

- цвет фона доски;
- цвет соединений;
- цвета хедера и фона новых карточек;
- радиусы карточек, панелей и кнопок;
- высоту хедера карточек и групп;
- размер иконок в хедерах карточек;
- силу тени карточек;
- толщину, стиль и контур соединений;
- иконки типов карточек через пакет темы с папкой `assets`.
- интерактивный фон: безопасные фоновые слои, частицы и декоративные объекты с готовыми типами поведения.
- SVG/PNG/WebP/GIF-фоны хедера и тела карточек через `assets.cardHeaders` и `assets.cardBodies`.

В этой версии реально применяются кастомные иконки карточек.
Картинки для соединений можно положить в пакет темы заранее, но сами соединения пока рисуются стандартным способом.

## Как применить тему

### Вариант 1: один файл темы

1. Откройте `Настройки`.
2. Перейдите в раздел `Внешний вид`.
3. Нажмите `Импортировать тему`.
4. Выберите файл `.dbtheme.json` или `.json`.

### Вариант 2: пакет темы с картинками

1. Откройте `Настройки`.
2. Перейдите в раздел `Внешний вид`.
3. Нажмите `Импорт пакета`.
4. Выберите папку темы.

Папка темы должна выглядеть так:

```text
my-theme/
  theme.json
  assets/
    icons/
      note.svg
      tasks.png
```

После импорта исходную папку можно перемещать или удалять. Desktop Board сохранит нужные данные темы внутри настроек доски.

## Как создать тему без ручного кода

Самый простой способ:

1. Откройте `Настройки`.
2. В разделе `Внешний вид` настройте цвета и внешний вид.
3. Нажмите `Экспортировать тему`.
4. Передайте полученный `.dbtheme.json` другому пользователю.

Такой способ подходит для цветовых схем и базового внешнего вида.

## Как создать тему с иконками

Создайте отдельную папку темы:

```text
my-theme/
  theme.json
  assets/
    icons/
      note.svg
      tasks.svg
      image.png
    actors/
      pet.gif
      pet-walk.png
      pet-rest.gif
    backgrounds/
      surface.png
```

В `theme.json` укажите, какие картинки использовать:

```json
{
  "type": "desktop-board-theme",
  "version": 1,
  "theme": {
    "name": "My Theme",
    "visual": {
      "assets": {
        "icons": {
          "note": "assets/icons/note.svg",
          "tasks": "assets/icons/tasks.svg",
          "image": "assets/icons/image.png"
        }
      }
    }
  }
}
```

Поддерживаемые форматы картинок:

- `.svg`
- `.png`
- `.webp`
- `.gif`

Рекомендации:

- используйте простые квадратные иконки;
- лучше готовить иконки на прозрачном фоне;
- не делайте файлы слишком тяжелыми;
- используйте понятные имена файлов латиницей.

## Как создать интерактивный фон

Интерактивный фон задается в `visual.interactiveBackground`. Это не скрипт и не плагин: тема только описывает, какие слои и объекты нужно показать. Desktop Board сам выполняет безопасные встроенные поведения.

Пользователь может выключить интерактивный фон или выбрать качество в `Настройки` -> `Внешний вид` -> `Интерактивный фон`. Если тема повреждена, содержит слишком тяжелые файлы или неподдерживаемые параметры, приложение использует обычный фон.

Пример структуры папки:

```text
my-interactive-theme/
  theme.json
  assets/
    actors/
      pet.gif
    backgrounds/
      surface.png
```

Пример `theme.json`:

```json
{
  "type": "desktop-board-theme",
  "version": 1,
  "theme": {
    "name": "Soft interactive scene",
    "visual": {
      "assets": {
        "actors": {
          "pet": "assets/actors/pet.gif",
          "petWalk": "assets/actors/pet-walk.png",
          "petRest": "assets/actors/pet-rest.gif"
        },
        "backgrounds": {
          "surface": "assets/backgrounds/surface.png"
        }
      },
      "interactiveBackground": {
        "enabled": true,
        "fps": 30,
        "background": {
          "type": "particles",
          "particleColor": "#7aa884",
          "particleCount": 80,
          "opacity": 0.25
        },
        "actors": [
          {
            "id": "pet",
            "sprite": "pet",
            "behavior": "wanderAndFollowMouse",
            "count": 2,
            "width": 48,
            "height": 48,
            "speed": 55,
            "mouseInterestRadius": 180,
            "canRestOnCards": true,
            "layer": "overlay",
            "animations": {
              "idle": {
                "type": "gif",
                "asset": "pet"
              },
              "walk": {
                "type": "spritesheet",
                "asset": "petWalk",
                "frames": 8,
                "fps": 12,
                "loop": true,
                "flipByDirection": true
              },
              "rest": {
                "type": "gif",
                "asset": "petRest"
              }
            },
            "reactions": {
              "default": "idle",
              "moving": "walk",
              "mouseNear": "walk",
              "cardRest": "rest"
            }
          }
        ],
        "cardEffects": {
          "create": {
            "enabled": true,
            "type": "portal",
            "delayMs": 700,
            "durationMs": 900,
            "color": "#7aa884"
          },
          "delete": {
            "enabled": true,
            "type": "portal",
            "delayMs": 700,
            "durationMs": 900,
            "color": "#8a6f2a"
          }
        }
      }
    }
  }
}
```

Поддерживаемые типы фона:

- `none` - без дополнительного фона;
- `solid` - однотонная заливка;
- `gradient` - градиент из массива `colors`;
- `image` - картинка из `assets.backgrounds`;
- `particles` - легкие частицы поверх фона доски.

Поддерживаемые поведения объектов:

- `wander` - свободное движение по видимой области;
- `followMouse` - движение к курсору, когда он рядом;
- `wanderAndFollowMouse` - обычное движение с реакцией на курсор;
- `restOnCard` - объект может останавливаться рядом с карточкой;
- `orbitCard` - движение вокруг карточки;
- `growAroundCard` - декоративная обводка вокруг карточки.
- `surfaceWanderAndMouseHunt` - объект двигается по карточкам, соединениям и фону, может отдыхать на краю карточки и реагировать на курсор.

Анимации объекта задаются в `animations`. Поддерживаются:

- `gif` - один GIF-файл;
- `image` - одна статичная картинка;
- `spritesheet` - одна картинка с кадрами слева направо.
- `randomSet` - случайный выбор одной из перечисленных анимаций;
- `sequence` - несколько анимаций подряд;
- `directional` - разные анимации для направлений `left`, `right`, `up`, `down`;
- `oneShot` - одноразовая анимация с возвратом к другой анимации.

Для `spritesheet` укажите `frames`, `fps`, при необходимости `columns`, `frameWidth`, `frameHeight`. Если `flipByDirection` равен `true`, картинка будет зеркалиться при движении влево.

Для любой анимации можно указать безопасные визуальные параметры:

- `offsetX` и `offsetY` - смещение картинки относительно actor box, -240..240;
- `scale` - масштаб картинки, 0.1..4;
- `opacity` - прозрачность, 0..1.

Пример расширенных анимаций:

```json
"animations": {
  "idleA": {
    "type": "gif",
    "asset": "catIdleA"
  },
  "idleB": {
    "type": "gif",
    "asset": "catIdleB"
  },
  "idle": {
    "type": "randomSet",
    "items": ["idleA", "idleB"],
    "intervalMs": [3000, 9000]
  },
  "noticeThenRun": {
    "type": "sequence",
    "steps": [
      { "animation": "notice", "durationMs": 600 },
      { "animation": "run", "loop": true }
    ]
  },
  "walk": {
    "type": "directional",
    "left": "walkLeft",
    "right": "walkRight",
    "up": "walkUp",
    "down": "walkDown",
    "default": "walkRight"
  },
  "jump": {
    "type": "oneShot",
    "animation": "jumpFrames",
    "fallback": "idle",
    "durationMs": 700
  }
}
```

Блок `reactions` связывает состояние объекта с анимацией:

- `default` - обычное состояние;
- `moving` - объект движется;
- `mouseNear` - курсор рядом с объектом;
- `cardRest` - объект остановился у карточки;
- `orbit` - объект движется вокруг карточки.
- `notice` - объект заметил курсор;
- `hunt` - объект движется к курсору;
- `rest` - объект отдыхает;
- `return` - объект возвращается к обычному движению;
- `jump` - общий fallback для прыжка;
- `jumpStart` - начало прыжка;
- `jumpAir` - actor находится в воздухе;
- `land` - приземление;
- `climbUp` - подъем с соединения или фона на карточку;
- `dropDown` - спуск с карточки на соединение или фон.

### Прыжки и переходы между поверхностями

Для `surfaceWanderAndMouseHunt` можно добавить блок `transitions`. Если блока нет, старые темы продолжают работать без прыжков.

```json
"transitions": {
  "enabled": true,
  "maxJumpDistance": 420,
  "jumpDurationMs": 650,
  "jumpArcHeight": 90,
  "climbDurationMs": 700,
  "dropDurationMs": 520,
  "cardToConnectionDistance": 180,
  "connectionToCardDistance": 180,
  "animations": {
    "jumpStart": "jumpStart",
    "jumpAir": "jumpAir",
    "land": "land",
    "climbUp": "climbUp",
    "dropDown": "dropDown"
  }
}
```

Когда движок запускает переход:

- карточка -> карточка: `jumpStart` -> `jumpAir` -> `land`, если расстояние не больше `maxJumpDistance`;
- карточка -> соединение: `dropDown`, если расстояние не больше `cardToConnectionDistance`;
- соединение -> карточка: `climbUp`, если расстояние не больше `connectionToCardDistance`;
- соединение -> соединение: `jump`, если actor переходит на другой путь и расстояние не больше `maxJumpDistance`;
- карточка -> фон: `dropDown`, фон -> карточка: `climbUp`, если расстояние попадает в безопасный лимит.

Если нужная анимация не задана, Desktop Board использует fallback: `jump`, затем `moving`, затем `default`.
Все параметры ограничиваются безопасными диапазонами: расстояния до 2000 px для прыжка и до 800 px для переходов карточка/соединение, длительности 120..5000 ms, высота дуги 0..600 px.

### Взаимодействие actors друг с другом

Внутри actor можно добавить массив `interactions`. Это безопасные встроенные правила поведения: они не меняют данные доски, не сохраняют состояние в файл и не дают теме доступ к коду.

Поддерживаемые типы:

- `avoidActors` - держать дистанцию от других actors;
- `greetActor` - при встрече проиграть короткую анимацию у обоих actors;
- `followActor` - иногда идти за другим actor;
- `gatherAroundCard` - иногда собираться около карточки.

Пример:

```json
"interactions": [
  {
    "type": "avoidActors",
    "target": "any",
    "radius": 48,
    "strength": 0.6
  },
  {
    "type": "greetActor",
    "target": "sameKind",
    "radius": 42,
    "cooldownMs": 12000,
    "durationMs": [900, 1600],
    "selfAnimation": "hello",
    "otherAnimation": "hello"
  },
  {
    "type": "followActor",
    "target": "sameKind",
    "distance": 86,
    "chance": 0.15,
    "durationMs": [4000, 12000]
  },
  {
    "type": "gatherAroundCard",
    "chance": 0.08,
    "durationMs": [5000, 16000],
    "anchor": "card.top",
    "maxGathered": 3,
    "spacing": 44
  }
]
```

Поле `target` принимает:

- `sameKind` - actors с тем же `id` в теме;
- `any` - любой actor;
- конкретный `id` actor-типа, например `cat`.

Параметры ограничены безопасными диапазонами. Если значение слишком большое, неподдерживаемое или поврежденное, Desktop Board заменит его безопасным значением или проигнорирует правило.

### Пример: котик на карточках и соединениях

Для такого поведения не нужен JavaScript. Тема описывает только изображения, а Desktop Board выполняет встроенное безопасное поведение.

Структура папки:

```text
cat-theme/
  theme.json
  assets/
    actors/
      cat-idle.gif
      cat-walk.png
      cat-notice.gif
      cat-hunt.png
      cat-rest.gif
      cat-jump-start.gif
      cat-jump-air.gif
      cat-land.gif
      cat-climb-up.gif
      cat-drop-down.gif
```

Пример `theme.json`:

```json
{
  "type": "desktop-board-theme",
  "version": 1,
  "theme": {
    "name": "Cat widgets",
    "visual": {
      "assets": {
        "actors": {
          "catIdle": "assets/actors/cat-idle.gif",
          "catWalk": "assets/actors/cat-walk.png",
          "catNotice": "assets/actors/cat-notice.gif",
          "catHunt": "assets/actors/cat-hunt.png",
          "catRest": "assets/actors/cat-rest.gif",
          "catJumpStart": "assets/actors/cat-jump-start.gif",
          "catJumpAir": "assets/actors/cat-jump-air.gif",
          "catLand": "assets/actors/cat-land.gif",
          "catClimbUp": "assets/actors/cat-climb-up.gif",
          "catDropDown": "assets/actors/cat-drop-down.gif"
        }
      },
      "interactiveBackground": {
        "enabled": true,
        "fps": 30,
        "actors": [
          {
            "id": "cat",
            "sprite": "catIdle",
            "behavior": "surfaceWanderAndMouseHunt",
            "count": 2,
            "width": 72,
            "height": 56,
            "speed": 58,
            "layer": "overlay",
            "surfaces": {
              "cards": true,
              "connections": true,
              "board": false,
              "cardArea": "header",
              "connectionSnapDistance": 24
            },
            "rest": {
              "enabled": true,
              "target": "cardEdge",
              "intervalMs": [12000, 45000],
              "durationMs": [5000, 18000],
              "edge": "auto",
              "offsetX": 0,
              "offsetY": -8,
              "animation": "rest"
            },
            "mouse": {
              "noticeRadius": 220,
              "huntRadius": 160,
              "noticeDelayMs": 600,
              "loseInterestRadius": 300,
              "huntSpeedMultiplier": 1.35,
              "animations": {
                "notice": "notice",
                "hunt": "hunt"
              }
            },
            "transitions": {
              "enabled": true,
              "maxJumpDistance": 420,
              "jumpDurationMs": 650,
              "jumpArcHeight": 90,
              "climbDurationMs": 700,
              "dropDurationMs": 520,
              "cardToConnectionDistance": 180,
              "connectionToCardDistance": 180,
              "animations": {
                "jumpStart": "jumpStart",
                "jumpAir": "jumpAir",
                "land": "land",
                "climbUp": "climbUp",
                "dropDown": "dropDown"
              }
            },
            "animations": {
              "idle": {
                "type": "gif",
                "asset": "catIdle"
              },
              "walk": {
                "type": "spritesheet",
                "asset": "catWalk",
                "frames": 8,
                "fps": 12,
                "loop": true,
                "flipByDirection": true
              },
              "notice": {
                "type": "gif",
                "asset": "catNotice"
              },
              "hunt": {
                "type": "spritesheet",
                "asset": "catHunt",
                "frames": 8,
                "fps": 16,
                "loop": true,
                "flipByDirection": true
              },
              "rest": {
                "type": "gif",
                "asset": "catRest"
              },
              "jumpStart": {
                "type": "gif",
                "asset": "catJumpStart"
              },
              "jumpAir": {
                "type": "gif",
                "asset": "catJumpAir"
              },
              "land": {
                "type": "gif",
                "asset": "catLand"
              },
              "climbUp": {
                "type": "gif",
                "asset": "catClimbUp"
              },
              "dropDown": {
                "type": "gif",
                "asset": "catDropDown"
              }
            },
            "reactions": {
              "default": "idle",
              "moving": "walk",
              "notice": "notice",
              "hunt": "hunt",
              "rest": "rest",
              "return": "walk",
              "cardRest": "rest",
              "mouseNear": "walk",
              "jump": "jumpAir",
              "jumpStart": "jumpStart",
              "jumpAir": "jumpAir",
              "land": "land",
              "climbUp": "climbUp",
              "dropDown": "dropDown"
            },
            "interactions": [
              {
                "type": "avoidActors",
                "target": "any",
                "radius": 48,
                "strength": 0.6
              },
              {
                "type": "greetActor",
                "target": "sameKind",
                "radius": 42,
                "cooldownMs": 12000,
                "durationMs": [900, 1600],
                "selfAnimation": "notice",
                "otherAnimation": "notice"
              }
            ]
          }
        ]
      }
    }
  }
}
```

Если нужно, чтобы хвост визуально свисал с карточки, подготовьте `cat-rest.gif` с нужным прозрачным полем вокруг котика и подберите `rest.offsetX` / `rest.offsetY`. Тема не получает доступ к физике, DOM или CSS, поэтому такой эффект делается самой картинкой и безопасным смещением.

Эффекты карточек задаются в `cardEffects`. Это не дает теме право самой создавать или удалять карточки. Эффект применяется только к действиям пользователя: когда пользователь создает карточку или удаляет ее. Поддерживаемые типы:

- `portal` - кольца вокруг места появления или удаления;
- `fade` - мягкая заливка;
- `scale` - контур с изменением масштаба;
- `slide` - контур со сдвигом.
- `particleBurst` - безопасный выброс частиц из выбранной точки;
- `ripple` - расходящееся кольцо;
- `glow` - мягкое свечение вокруг карточки;
- `pulse` - пульсирующая рамка карточки.

`delayMs` задает задержку фактического появления или удаления карточки, максимум 4000 мс. Если интерактивный фон выключен в настройках, карточки создаются и удаляются сразу.

Параметр `layer` принимает `background` или `overlay`. Объекты в `background` рисуются под карточками, объекты в `overlay` - поверх карточек. Все слои не перехватывают мышь и не мешают работе с доской.

В `surfaces` можно ограничить, где actor строит маршруты:

- `cards` - разрешить маршруты по карточкам;
- `connections` - разрешить маршруты по соединениям;
- `board` - разрешить свободное движение по фону доски, если подходящих карточек или соединений нет;
- `cardArea` - какую часть карточки использовать: `perimeter`, `header` или `body`.

Если нужно, чтобы actor ходил только по соединениям и хедерам карточек, используйте:

```json
"surfaces": {
  "cards": true,
  "connections": true,
  "board": false,
  "cardArea": "header",
  "connectionSnapDistance": 24
}
```

### Реакции темы на действия пользователя

Тема может запускать безопасные визуальные эффекты при действиях пользователя. Для этого используется массив `interactiveBackground.reactions`.

Пример:

```json
{
  "interactiveBackground": {
    "enabled": true,
    "reactions": [
      {
        "when": "cardCreated",
        "do": {
          "effect": "portal",
          "anchor": "card.center",
          "color": "#7aa884",
          "durationMs": 900
        }
      },
      {
        "when": "taskChecked",
        "if": {
          "cardKind": "tasks"
        },
        "do": {
          "effect": "particleBurst",
          "anchor": "card.top",
          "color": "#ffd84d",
          "count": 32,
          "spread": 160,
          "durationMs": 700
        }
      },
      {
        "when": "cardHovered",
        "if": {
          "tag": "important"
        },
        "cooldownMs": 1200,
        "do": {
          "effect": "glow",
          "anchor": "card",
          "color": "#ffcc00",
          "durationMs": 800
        }
      }
    ]
  }
}
```

Поддерживаемые события:

- `cardCreated`
- `cardDeleted`
- `cardMoved`
- `cardResized`
- `cardSelected`
- `cardDeselected`
- `cardHovered`
- `cardContentChanged`
- `cardGrouped`
- `cardUngrouped`
- `taskChecked`
- `taskUnchecked`
- `timerFinished`
- `reminderTriggered`
- `fileAttached`
- `urlLoaded`

Не все события обязательно возникают в каждой карточке. Например, `taskChecked` относится к спискам задач и прогрессу, а `urlLoaded` - к URL-карточке.

Поддерживаемые условия в `if`:

- `cardKind` или `cardKinds` - один тип карточки или список типов;
- `tag` или `tags` - один тег или список тегов;
- `cardId` или `cardIds` - конкретная карточка или список карточек.

Поддерживаемые точки крепления в `anchor`:

- `card`
- `card.center`
- `card.top`
- `card.right`
- `card.bottom`
- `card.left`
- `card.topLeft`
- `card.topRight`
- `card.bottomRight`
- `card.bottomLeft`
- `board.visibleCenter`
- `board.cursor`

Параметры эффекта:

- `effect` или `type` - тип эффекта;
- `anchor` - точка, откуда рисовать эффект;
- `color` - цвет в формате `#rrggbb`;
- `durationMs` - длительность, 120..4000 мс;
- `delayMs` - задержка визуального эффекта, 0..4000 мс;
- `opacity` - прозрачность, 0..1;
- `count` - количество частиц для `particleBurst`, 1..120;
- `radius` - радиус для `ripple`, 8..420;
- `spread` - разброс частиц, 0..480;
- `cooldownMs` у реакции - защита от слишком частого запуска, 0..60000 мс.

Реакции не могут изменять данные доски, создавать настоящие карточки, удалять карточки, запускать код, обращаться к DOM, CSS или внешним URL. Если параметр не поддерживается или выходит за безопасный диапазон, Desktop Board заменит его безопасным значением или проигнорирует реакцию.

## Пример полного файла темы

Этот пример можно скопировать в `theme.json` или сохранить как `.dbtheme.json`.

```json
{
  "type": "desktop-board-theme",
  "version": 1,
  "theme": {
    "name": "My Theme",
    "colorScheme": {
      "name": "My Theme",
      "backgroundColor": "#2f3331",
      "backgroundOpacity": 0,
      "connectionColor": "#f4f7f2",
      "colors": {
        "note": { "header": "#f2c94c", "body": "#fff8d7" },
        "comment": { "header": "#8a6f2a", "body": "#fff1c2" },
        "code": { "header": "#4c6ef5", "body": "#e9efff" },
        "table": { "header": "#5b7bd5", "body": "#eef3ff" },
        "calculator": { "header": "#d66f45", "body": "#fde8de" },
        "tasks": { "header": "#2f7d57", "body": "#e7f3ec" },
        "schedule": { "header": "#3a8f9f", "body": "#e6f6f8" },
        "bookmark": { "header": "#f2c94c", "body": "#fff8d7" },
        "progress": { "header": "#2f7d57", "body": "#e7f3ec" },
        "timer": { "header": "#3a8f9f", "body": "#e6f6f8" },
        "reminder": { "header": "#d96b5f", "body": "#fdebe7" },
        "image": { "header": "#7453a6", "body": "#f0ebf8" },
        "video": { "header": "#7453a6", "body": "#f0ebf8" },
        "audio": { "header": "#7453a6", "body": "#f0ebf8" },
        "file": { "header": "#7453a6", "body": "#f0ebf8" },
        "web": { "header": "#7453a6", "body": "#f0ebf8" },
        "group": { "header": "#7aa884", "body": "#d4e6da" }
      }
    },
    "visual": {
      "tokens": {
        "cardRadius": 8,
        "panelRadius": 8,
        "buttonRadius": 6,
        "cardBorderWidth": 1,
        "cardHeaderHeight": 28,
        "groupHeaderHeight": 42,
        "iconScale": 1,
        "shadow": "medium"
      },
      "connections": {
        "strokeWidth": 3,
        "selectedStrokeWidth": 3.5,
        "draftStrokeWidth": 2,
        "outlineWidth": 6,
        "waypointRadius": 6,
        "markerScale": 1,
        "lineStyle": "solid"
      },
      "assets": {
        "icons": {},
        "cardHeaders": {
          "default": "assets/card-header.svg"
        },
        "cardBodies": {
          "default": "assets/card-body.svg"
        }
      }
    }
  }
}
```

## Цвета карточек

Цвета указываются в формате `#rrggbb`.

Поддерживаемые типы карточек:

- `note`
- `comment`
- `code`
- `table`
- `calculator`
- `tasks`
- `schedule`
- `bookmark`
- `progress`
- `timer`
- `reminder`
- `image`
- `video`
- `audio`
- `file`
- `web`
- `group`

Если цвет для какого-то типа не указан, Desktop Board использует стандартный цвет.

## Параметры внешнего вида

| Поле | Значения | Что меняет |
| --- | --- | --- |
| `cardRadius` | `0..24` | скругление карточек |
| `panelRadius` | `0..24` | скругление панелей, меню и окон |
| `buttonRadius` | `0..24` | скругление кнопок |
| `cardBorderWidth` | `0..4` | толщину рамки карточек |
| `cardHeaderHeight` | `24..48` | высоту хедера карточек |
| `groupHeaderHeight` | `32..64` | высоту хедера группы |
| `iconScale` | `0.7..1.6` | размер иконок карточек |
| `shadow` | `none`, `light`, `medium`, `strong` | силу тени карточек |

Если указать слишком маленькое или слишком большое значение, Desktop Board автоматически приведет его к допустимому диапазону.

## Параметры соединений

| Поле | Значения | Что меняет |
| --- | --- | --- |
| `strokeWidth` | `1..10` | толщину обычного соединения |
| `selectedStrokeWidth` | `1..12` | толщину выбранного соединения |
| `draftStrokeWidth` | `1..8` | толщину соединения во время создания |
| `outlineWidth` | `0..14` | толщину контура соединения |
| `waypointRadius` | `2..12` | размер путевых точек |
| `markerScale` | `0.5..2.5` | размер стрелок и точек на концах |
| `lineStyle` | `solid`, `dashed`, `dotted` | стиль линии |

## SVG-фоны карточек

Фоны карточек можно задать через пакет темы:

```json
{
  "visual": {
    "assets": {
      "cardHeaders": {
        "default": "assets/card-header.svg",
        "note": "assets/note-header.svg"
      },
      "cardBodies": {
        "default": "assets/card-body.svg",
        "tasks": "assets/tasks-body.svg"
      }
    }
  }
}
```

`default` применяется ко всем карточкам. Если указан ключ типа карточки, например `note` или `tasks`, он переопределяет `default` только для этого типа.

В редакторе тем сейчас доступны быстрые поля для `default` SVG хедера и тела карточки. Файл встраивается в экспортируемую тему как data URI, поэтому отдельный файл после экспорта не нужен.

## Безопасность темы

Тема не должна содержать программы, скрипты или ссылки на внешние сайты.
Desktop Board применяет только разрешенные параметры оформления.

Не поддерживаются:

- JavaScript;
- произвольный CSS;
- внешние URL для картинок;
- абсолютные пути к файлам;
- пути с `..`.

Если тема повреждена или содержит неподдерживаемые данные, приложение не должно ломаться. В таком случае будет использовано стандартное оформление.

## Если тема выглядит неправильно

Попробуйте:

1. Импортировать другую тему.
2. Вернуться к стандартным настройкам внешнего вида.
3. Проверить, что цвета записаны в формате `#rrggbb`.
4. Проверить, что пути к картинкам начинаются с `assets/`.
5. Проверить, что файлы картинок лежат внутри папки темы.
