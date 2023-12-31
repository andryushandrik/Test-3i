const encode = (input) =>
  [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap((x) => x)
    .join(".")
    .match(/./g)
    .flatMap((x, i) => new Array(x == "." ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join("")
    .replace(/(([01])\2*)/g, (x) => `${+x ? "." : "-"}${x.length}`);

    /*Эта функция не является обратимой, потому что она теряет информацию при кодировании переменной. Каждому значению переменной может соответствовать несколько закодированных значений, поэтому невозможно однозначно восстановить исходную переменную из её закодированного значения.
     1. При сортировке символов методом sort(). Если в исходном входном массиве были символы с одинаковыми кодами, то после сортировки они будут расположены в произвольном порядке, и мы не сможем восстановить исходную последовательность символов.

2. При преобразовании отсортированного массива в строку методом join('.'). Если исходный массив содержал точки, то они будут заменены на символы '.', и мы не сможем различить между собой исходные точки и добавленные при преобразовании в строку.

3. При разбиении строки на блоки методом match(/./g). Если исходная строка содержала последовательности одинаковых символов, то они будут объединены в один блок, и мы не сможем различить между собой исходные последовательности и добавленные при разбиении.

4. При замене блоков на коды методом replace(/(([01])\2*)/g, x => ${(+x ? '.' : '-')}${x.length}). Если исходный блок содержал только символы '0' или только символы '1', то он будет заменен на код длины 1, и мы не сможем различить между собой блоки разной длины. */



