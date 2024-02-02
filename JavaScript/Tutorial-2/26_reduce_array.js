/* 
--> reduce nethod take an initial value called accumulator and add all the array value with this accumulator 
--> reduce also return whatever you want
*/

const func1=function(){
    const nums=[2,3,4]
    const taotalval=nums.reduce((acc, currVal)=> acc+currVal, 0)
    console.log(taotalval);
}
func1()