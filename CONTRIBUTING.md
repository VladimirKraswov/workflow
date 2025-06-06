## 🧑‍💻 Инструкция: как внести свой вклад в проект (через Fork и Pull Request)

1. ### 🔁 Сделайте Fork репозитория

Перейдите по ссылке на репозиторий (например: [https://github.com/your-username/todo-cli](https://github.com/your-username/todo-cli)) и нажмите кнопку **Fork** в правом верхнем углу.

GitHub создаст копию проекта в вашем аккаунте.

---

2. ### 📥 Клонируйте ваш форк

Откройте терминал и выполните:

```bash
git clone https://github.com/ВАШ_ЛОГИН/todo-cli.git
cd todo-cli
```

---

3. ### 🌿 Создайте новую ветку

```bash
git checkout -b feat/CLI-002-new-feature
```

> 🔎 Вместо `feat/CLI-002-new-feature` используйте осмысленное имя ветки, например `fix/CLI-003-bug-title`.

---

4. ### 💻 Внесите изменения

* Реализуйте функциональность
* Проверьте, что ничего не сломалось
* Протестируйте команду через:

```bash
node index.js list
```

---

5. ### ✅ Сделайте коммит с правильным сообщением

```bash
git add .
git commit -m "feat(CLI-002): добавлена возможность редактирования задач"
```

> Используйте формат: `тип(номер-задачи): краткое описание`

Примеры:

* `feat(CLI-004): добавлена команда 'edit'`
* `fix(CLI-005): исправлен вывод списка задач`

---

6. ### 🚀 Отправьте ветку в ваш форк

```bash
git push origin feat/CLI-002-new-feature
```

---

7. ### 🔃 Создайте Pull Request

* Перейдите на свой форк на GitHub
* Нажмите **"Compare & pull request"**
* Убедитесь, что:

  * `base repository`: оригинальный (например, `your-username/todo-cli`)
  * `compare`: ваша ветка
* Напишите описание изменений (или используйте шаблон, если он есть)
* Нажмите **"Create Pull Request"**

---

8. ### 💬 Ожидайте ревью

* Преподаватель или мейнтейнер посмотрит ваш PR
* Вы можете получить фидбек
* После правок просто закоммитьте их в ту же ветку — PR обновится автоматически

---

9. ### 🏁 Мерж

Когда всё будет готово, ваш Pull Request будет смержен — и ваш вклад окажется в основном проекте 🚀

---

## ❓ Советы

* Чаще коммитьте — не копите кучу изменений в одном коммите.
* Делайте `git pull --rebase upstream main` если вы настроили `upstream`, чтобы подтянуть свежие изменения.
* Если что-то сломалось — не бойтесь, вы работаете в **форке**. Оригинальный проект вы не повредите 🙂

---