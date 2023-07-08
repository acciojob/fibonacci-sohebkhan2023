function fibonacci(num) 
{
// your code here
	let f1=0;
	let f2=1;
	if(num=1)
		return 0;
	else if(num=2)
		return 1;
	else 
		for(let i=2;i<=num;i++)
		{
			let f3=f1+f2;
			f1=f2;
			f2=f3;
			return f3;
			
		}
	


}


