// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO

		var a = '[a, b, c, d]';
        var b = [1, 2, 3, 4];
        console.log(a instanceof Array);
        console.log(b instanceof Array);



// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

		var a = [1, 2, 3, 4, 5];
        var c=[];
        for (i=0;i<a.length;i++){
            var b=a[i]*2;
            c.push(b);
            console.log(c);
        }


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

			var colors = ["Red", "Green", "White", "Black"];
             d=colors.join("  ");
             b = colors.join("+");
             c = colors.join(",");
             console.log(b)
             console.log(c)
             console.log(d)



// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

	//创建数组元素arr
     var arr=[5, 1, 8, 10, 4];
     //创建每次循环存储最大值得变量
     var max;
     //遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
     for(var i=0; i<arr.length; i++){
         //外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
         for(var j=i; j<arr.length; j++){
             if(arr[i]<arr[j]){
                 //如果arr[j]大就把此时的值赋值给最大值变量max
                 max=arr[j];
                 arr[j]=arr[i];
                 arr[i]=max;
             }
         }
     }
     document.write(arr.toString()+"<br>");




// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

 var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
     function findMost2(a) {
         var h = {};
         var maxNum = 0;
         var maxEle = null;
         for (var i = 0; i < a.length; i++) {
             var b = a[i];
             h[b] === undefined ? h[b] = 1 : (h[b]++);
             if (h[b] > maxNum) {
                 maxEle = b;
                 maxNum = h[b];
             }
         }
         return maxEle  ;
     }
     console.log(findMost2(a));
	 