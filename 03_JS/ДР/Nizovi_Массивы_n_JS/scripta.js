// СОЗДАНИЕ, ОБНОВЛЕНИЕ И ПРОСМАТРИВАНИЕ ОБЪЕКТОВ С ПОМОЩЬЮ МЕТОДОВ МАССИВА JS

/* 1. СОЗДАНИЕ ОБЪЕКТА JSON: */
const car =  {
    color: "purple",
    type: "minivan",
    registration: new Date('2012-02-03'),
    capacity: 7
} // этот объект представляет один автомобиль

/* 2. СОЗДАНИЕ МАССИВА ОБЪЕКТОВ: */
let cars =[
{
    color: "purple",
    type: "minivan",
    registration: new Date('2017-01-03'),
    capacity: 7
},
{
    color: "red",
    type: "station wagon",
    registration: new Date('2018-03-03'),
    capacity: 5
},
]
/* 3. ДОБАВЛЕНИЕ НОВОГО ОБЪЕКТА В НАЧАЛО МАССИВА - Array.unshift(element): */
cars.unshift({
    color: "green",
    type: "mini kuper",
    registration: new Date('2026-30-09'),
    capacity: 10
},)
console.log(cars)

// Пример 2 
let automobili = ['BMW', 'Audi','Mersedes'];
automobili.unshift('Toyota');
console.log(automobili)

/* 4. ДОБАВЛЕНИЕ НОВОГО ОБЪЕКТА В КОНЕЦ МАССИВА — Array.push(element): */
cars.push({
    color: "red",
    type: "passat",
    registration: new Date('2026-15-10'),
    capacity: 11
},)
console.log(cars)

/* 5. ДОБАВЛЕНИЕ НОВОГО ОБЪЕКТА ПОСЕРЕДИНЕ МАССИВА - Array.splice(позиция, количество_удаляемых, объект_для_добавления): */
cars.splice(2,0, {
    color: "yellow",
    type: "cabrio",
    registration: new Date('2027-03-01'),
    capacity: 1
})
console.log(cars)

/* 6. ПРОСМОТР МАССИВА ОБЪЕКТОВ - Array.find - ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ: */
// ищем машину красного цвета:
console.log(cars.find(car => car.color === "red"));
// ищем по нескольким значениям:
console.log(cars.find(car => car.color === "yellow" && car.type === "cabrio"))

/* 7.ПОЛУЧЕНИЕ НЕСКОЛЬКИХ СООТВЕТВЕТСТВУЮЩИХ МАССИВОВ  - Array.filter: */
// найдет все машины красного цвета
console.log(cars.filter(car => car.color === "red"))

/* 8. ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ МАССИВА - Array.map: */

// например нужно классифицировать наши авто в группы в зависимости от их размера, используя capacity:

/* Используем тернарный оператор - синтаксис: 
Условие ? Значение_если_да : Значение_если_нет */

const sizes = cars.map( car => ({
    type: car.type,
    capacity: car.capacity,
    size: car.capacity <= 4 ? "small" :
    car.capacity <= 7 ? "medium" : "large"
}));
console.log(sizes)

/* 9. ДОБАВЛЕНИЕ СВОЙСТВА К КАЖДОМУ ОБЪЕКТУ МАССИВА - Array.forEach: */
cars.forEach(car => {
    car.size = car.capacity <= 3 ? "small" :
    car.capacity <= 5 ? "medium" : "large";
})
console.log(cars)

/* 10. СОРТИРОВКА МАССИВА ПО СВОЙСТВУ - Array.sort(): */
// Сортировка по capacity: расположим машины от меньшей вместимости к большей:
cars.sort((a, b) => a.capacity - b.capacity)
console.log(cars)

// от большей к меньшей:
// cars.sort((a, b) => b.capacity - a.capacity)
// console.log(cars)

/* 11. ПРОВЕРКА СООТВЕТСТВИЯ УСЛОВИЯ ОБЪЕКТОВ В МАССИВЕ - Array.every, Array.includes: */
// Array.every() - проверяет ВСЕ объекты, и у каждого объекта должно выполняться это условие
// Array.includes() - есть ли элемент в массиве

// у всех ли машин capacity > 0 ?
console.log(rezult = cars.every(car => car.capacity > 0)) // true

