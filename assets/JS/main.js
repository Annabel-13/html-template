document.addEventListener('DOMContentLoaded', () => {


    const accordions = document.querySelectorAll('.accordion');
    const accordionContent = document.querySelectorAll('.acc_content');

    accordions.forEach(accItem => {
        accItem.addEventListener('click', (event) => {
            event.preventDefault();

            const context = accItem.nextElementSibling;

            if (context.style.maxHeight) {
                context.style.maxHeight = null;
                accItem.classList.remove('is-open')
            } else {
              context.style.maxHeight = context.scrollHeight + 'px';
              accItem.classList.add('is-open')
            }

            accordionContent.forEach((itemCon) => {

                if (itemCon !== context) {
                    itemCon.style.maxHeight = null;
                }
            });

            accordions.forEach(item => {
                if (item !== accItem) {
                    item.classList.remove('is-open')
                }
            })
        })


    })




});


/*
* Задача Сережи
*Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. Организовать создание методов так, что бы можно было вызывать любые комбинации:
obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
doFunction(func, x, y); получает параметрами 2 числа и функцию, которую нужно применить к x и y. Результат операции сохранять в obj.result
clear() очищает значение obj.result в 0
copy(buffer) получает параметром название ключа buffer (string) и добавляет его к obj Далее в любом порядке можно вызывать комбинации функций

Создать метод target(property)- дальнейшие действия функций doFunction() и clear() будут изменять значение не result, а переданной property

Пример: obj .doFunction(sum, 2, 4) .copy('some_name') .target('another_some_name') .doFunction(mul, 6, 3)
*
*
* */

// class Test {
//
//     result = 'result';
//
//
//     doFunction(func, x, y) {
//       this[this.result] = func(x, y);
//       return this // возвращает экземпляр себя
//     };
//
//
//     clear() {
//       this[this.result] = 0;
//         return this
//     }
//
//     copy(buffer) {
//         this[buffer] = this[this.result];
//         return this
//     }
//
//     target(property) {
//         this.result = property;
//         return this
//     }
//
// }
//
//
//
// let obj1 = new Test();
//     obj1.doFunction(function sum(x, y) {
//         return x + y;
//     }, 2 , 2);
