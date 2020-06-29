import Mock, { Random } from 'mockjs';


Mock.mock('/api/result','post',()=>{
	return{
		status: 200,
		message:'获取分析结果成功',
		rate: Random.integer(0,100)
	}
})