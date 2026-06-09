// Простой скрипт для демонстрации работы Git-ассоциаций
function checkGitCommand(command) {
    const cmd = command.toLowerCase().trim();
    if (cmd === 'push') {
        return 'Вы отправляете (выталкиваете) свой код на сервер GitHub 💻 ➔ 🌐';
    } else if (cmd === 'pull') {
        return 'Вы скачиваете (притягиваете) свежий код с сервера GitHub 💻 ⮨ 🌐';
    } else {
        return 'Попробуйте ввести "push" или "pull".';
    }
}

// Пример использования:
console.log(checkGitCommand('push'));
console.log(checkGitCommand('pull'));
