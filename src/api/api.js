
import request from './request.js';
// 获取验证码
export const getCaptcha = async (data) => {
  return await request({ method: 'get', url: '/captcha/getCaptcha' ,data: data});
};

// 登录
export const login = async (data) => {
  return await request({ method: 'post', url: '/user/login' ,data: data});
};

// 检验注册用户名是否重复
// export const checkUsername = async (data) => {
//   return await request({ method: 'get', url: '/gs-user-auth/user/checkUsername' ,data: data});
// };

//获取用户详情
export const getUserDetail = async (data,params) => {
  return await request({ method: 'get', url: '/user/info',data: data});
};

//设置交易密码
export const setTransactionPassword = async (data,params) => {
  return await request({ method: 'post', url: '/user/setPayPwd',data: data});
};

//修改交易密码
export const updateTransactionPassword = async (data,params) => {
  return await request({ method: 'post', url: '/user/updatePayPwd',data: data});
};
// 注册
export const register = async (data) => {
  return await request({ method: 'post', url: '/user/v2/register' ,data: data});
};

//修改登录密码
export const updatePassword = async (data,params) => {
  return await request({ method: 'post', url: '/user/updatePwd',data: data});
};

//获取用户头像
export const getAvataList = async (data,params) => {
  return await request({ method: 'get', url: '/avatar/list',data: data});
};

//帐变记录
export const transactionList = async (data,params) => {
  return await request({ method: 'get', url: '/user/transactionRecord/list',data: data});
};

//修改头像
export const avatarSet = async (data,params) => {
  return await request({ method: 'GET', url: '/avatar/set/' + data.id });
};

//修改登录密码
export const updateNickName = async (data,params) => {
  return await request({ method: 'post', url: '/user/updateNickName',data: data});
};

//退出登录
export const userLogout = async (data,params) => {
  return await request({ method: 'post', url: '/user/logout',data: data});
};

//获取线下充值类型
export const findRechargeType = async (data,params) => {
  return await request({ method: 'get', url: '/deposit/getCompany' ,data: data});
};

//获取线下虚拟货币类型
export const depositGetvirtual = async (data,params) => {
  return await request({ method: 'get', url: '/deposit/getvirtual' ,data: data});
};

//提交线下充值
export const companyDeposit = async (data) => {
  return await request({ method: 'post', url: '/deposit/companyDeposit' ,data: data});
};

//提交虚拟货币充值
export const companyVirDeposit = async (data) => {
  return await request({ method: 'post', url: '/deposit/companyVirDeposit' ,data: data});
};

//充值记录
export const depositRecord = async (data) => {
  return await request({ method: 'get', url: '/deposit/record' ,data: data});
};

//获取领取返水金额
export const getReturnAmount = async (data) => {
  return await request({ method: 'get', url: '/user/getReturnAmount' ,data: data});
};

//领取返水金额
export const autoReturn = async (data) => {
  return await request({ method: 'get', url: '/user/autoReturn' ,data: data});
};

//获取收款方式
export const getAllAccount = async (data) => {
  return await request({ method: 'get', url: '/user/AllAccount' ,data: data});
};

//绑定银行卡收款方式
export const bindBankAccount = async (data) => {
  return await request({ method: 'post', url: '/user/bindBankAccount' ,data: data});
};

//绑定虚拟货币收款方式
export const bindVirAccount = async (data) => {
  return await request({ method: 'post', url: '/user/bindVirAccount' ,data: data});
};

//删除收款方式
export const delAccount = async (data) => {
  return await request({ method: 'post', url: '/user/delAccount' ,data: data});
};

//查询用户余额
export const getUserBalance = async (data) => {
  return await request({ method: 'get', url: '/user/getUserBalance' ,data: data});
};

//用户提现
export const userWithdraw = async (data) => {
  return await request({ method: 'post', url: '/user/withdraw' ,data: data});
};

//提现记录
export const withdrawRecord = async (data) => {
  return await request({ method: 'get', url: '/user/withdraw/record' ,data: data});
};

//额度转换记录
export const eduOrderList = async (data,params) => {
  return await request({ method: 'get', url: '/user/eduOrder/list',data: data});
};

//第三方投注记录
export const platOrderList = async (data,params) => {
  return await request({ method: 'get', url: '/user/platOrder/list',data: data});
};

//彩票投注记录
export const lotteryOrderList = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/lotteryOrder/list',data: data});
};

//额度转入
export const platDeposit = async (data) => {
  return await request({ method: 'post', url: '/plat/deposit' ,data: data});
};

//额度转出
export const platWithdraw = async (data) => {
  return await request({ method: 'post', url: '/plat/withdraw' ,data: data});
};

//获取三方平台余额
export const platGetBalancec = async (data,params) => {
  return await request({ method: 'get', url: '/plat/getBalancec/' + params,data: data});
};

//获取三方平台登录地址
export const platLogin = async (data,params) => {
  return await request({ method: 'get', url: '/plat/login',data: data});
};

//获取所有平台游戏列表
export const getAllPlat = async (data,params) => {
  return await request({ method: 'get', url: '/plat/getAllPlat',data: data});
};

//获取额度转换所有平台列表
export const getPlatList = async (data,params) => {
  return await request({ method: 'get', url: '/plat/getPlatList',data: data});
};

//一键转出所有额度
export const platWithdrawAll = async (data) => {
  return await request({ method: 'post', url: '/plat/withdrawAll' ,data: data});
};

//获取所有彩种
export const getAllLottery = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/getAllLottery',data: data});
};

//获取指定平台游戏列表
export const getElegame = async (data,params) => {
  return await request({ method: 'get', url: '/plat/getElegame/' + params,data: data});
};

//获取首页banner
export const bannerList = async (data,params) => {
  return await request({ method: 'get', url: '/home/banner/list' ,data: data});
};

//获取消息列表
export const noticeList = async (data,params) => {
  return await request({ method: 'get', url: '/home/notice/list' ,data: data});
};

//获取活动列表
export const activityList = async (data,params) => {
  return await request({ method: 'get', url: '/home/activity/list' ,data: data});
};

// 彩票撤单
export const lotteryCancel = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/cancel/' + params ,data: data});
};

// 获取第三方支付渠道
export const getPayChannel = async (data,params) => {
  return await request({ method: 'get', url: '/pay/getPayChannel' ,data: data});
};

// 获取第三方支付渠道支付页面
export const getPayUrl = async (data,params) => {
  return await request({ method: 'get', url: '/pay/getPayUrl' ,data: data});
};

// 获取首页推荐彩种
export const getRecommendLottery = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/getRecommendLottery' ,data: data});
};

// 获取活动详情
export const activityDetail = async (data,params) => {
  return await request({ method: 'get', url: '/home/activity/detail/' + params ,data: data});
};

// 获取首页网站信息
export const homeDomain = async (data,params) => {
  return await request({ method: 'get', url: '/home/domain' ,data: data});
};

// 获取首页网站信息
export const getBanksList = async (data) => {
  return await request({ method: 'get', url: '/home/banks' ,data: data});
};

//站内信
export const messageList = async (data) => {
  return await request({ method: 'get', url: '/user/message/list' ,data: data});
};

//获取打码量
export const getWithdrawDama = async (data,params) => {
  return await request({ method: 'get', url: '/user/getWithdrawDama',data:data});
};

//获取提现方式
export const getWithdrawList = async (data) => {
  return await request({ method: 'get', url: '/user/getWithdrawList',data:data});
};

//获取站内信未读条数
export const messageCount = async (data) => {
  return await request({ method: 'get', url: '/user/message/count',data:data});
};

//站内信已读
export const messageRead = async (data) => {
  return await request({ method: 'post', url: '/user/message/read',data:data});
};

//下级彩票投注记录
export const agentLotteryOrderList = async (data,params) => {
  return await request({ method: 'get', url: '/agent/lotteryOrderList',data: data});
};

//vip等级奖励列表
export const awardList = async (data) => {
  return await request({ method: 'get', url: '/activity/level/awardList',data: data});
};

//vip等级奖励记录列表
export const levelRecord = async (data) => {
  return await request({ method: 'get', url: '/activity/level/record',data: data});
};

//vip等级晋升说明列表
export const levelupDes = async (data) => {
  return await request({ method: 'get', url: '/activity/level/upDes',data: data});
};

//领取等级活动奖励
export const levelReceive = async (params,data) => {
  return await request({ method: 'post', url: '/activity/level/receive/' + params,data:data});
};

//vip等级用户等级详情
export const levelUserDetail = async (data) => {
  return await request({ method: 'get', url: '/activity/level/userDetail',data: data});
};

//红包雨领取
export const hbyPost = async (data) => {
  return await request({ method: 'post', url: '/activity/hby/post',data:data});
};

//红包雨领取记录
export const hbyRecord = async (data) => {
  return await request({ method: 'get', url: '/activity/hby/record',data: data});
};

//投注记录统计
export const lotteryOrderSum = async (data) => {
  return await request({ method: 'get', url: '/lottery/lotteryOrder/sum',data: data});
};

// 个人报表
export const userBetReport = async (data,params) => {
  return await request({ method: 'get', url: '/user/betReport',data:data});
};

/////////////////////////////


//添加提款方式这个暂时没用
export const addPaymentMethod = async (params,data) => {
  return await request({ method: 'post', url: '/gs-api/withdrew/addPaymentMethod' ,data: data});
};

//获取支持的提现方式
// export const getWithdrawType = async (data,params) => {
//   return await request({ method: 'GET', url: '/gs-api/withdrew/getWithdrawType/' + params ,data: data});
// };


//获取用户资产 这个要删除
export const getAssets = async (data,params) => {
  return await request({ method: 'get', url: '/gs-user-auth/assets/getAssets',data: data});
};


//获取用户昵称
// export const updateNick = async (data,params) => {
//   return await request({ method: 'post', url: '/gs-user-auth/user/updateNick',data: data});
// };

//余额宝转入
export const transferIn = async (data,params) => {
  return await request({ method: 'post', url: '/gs-api/yuebao/transferIn',data: data});
};

//余额宝转出
export const transferOut = async (data,params) => {
  return await request({ method: 'post', url: '/gs-api/yuebao/transferOut',data: data});
};

//获取用户详情信息
export const userConfigInfo = async (data,params) => {
  return await request({ method: 'post', url: '/gs-user-auth/user/userConfigInfo',data: data});
};

//获取首页banner
// export const getBannerList = async (data,params) => {
//   return await request({ method: 'post', url: '/gs-api/banner/list',data: data});
// };

//获取首页game
export const gameList = async (data,params) => {
  return await request({ method: 'get', url: '/gs-api/games/gameList',data: data});
};


//校验交易密码
export const validTransationPassword = async (data,params) => {
  return await request({ method: 'post', url: '/gs-user-auth/user/validTransationPassword',data: data});
};



//设置邀请人
export const setInvitaPerson = async (data,params) => {
  return await request({ method: 'post', url: '/gs-user-auth/user/setInvitaPerson',data: data});
};

//申请提现
// export const withdrew = async (data,params) => {
//   return await request({ method: 'post', url: '/gs-api/withdrew/',data: data});
// };

// 获取菜种玩法
export const getGamePlayMethods = async (data) => {
  return await request({ method: 'get', url: '/gs-test/gameItem/' + data + '.json',data: data, hd: 'http://148.66.31.162:9000', type: 'game'});
};

//获取开奖结果
export const getResult = async (data,params) => {
  return await request({ method: 'get', url: '/gs-api/lottery/historyResult',data: data});
};

//获取游戏基本信息
export const getGameInfo = async (data,params) => {
  return await request({ method: 'get', url: '/gs-api/lottery/gameInfo',data: data});
};

//获取投注项赔率
export const gameOdds = async (data,params) => {
  return await request({ method: 'get', url: '/gs-api/games/gameOdds',data: data});
};

// //投注
// export const bet = async (data,params) => {
//   return await request({ method: 'post', url: '/gs-api/betOrder/bet',data: data});
// };

//获取用户注单查询条件
export const getConditions = async (data,params) => {
  return await request({ method: 'get', url: '/gs-api/betOrder/getConditions',data: data});
};

//用户注单接口
export const betRecords = async (data,params) => {
  return await request({ method: 'post', url: '/gs-api/betOrder/betRecord',data: data});
};

//开奖结果
export const lotteryResult = async (data,params) => {
  return await request({ method: 'post', url: '/gs-api/lottery/result',data: data});
};

//获取充值信息
// export const getRechargeInfo = async (data,params) => {
//   return await request({ method: 'post', url: '/gs-api/recharge/getRechargeInfo' ,data: data});
// };

//发起充值接口
export const submitRecharge = async (data,params) => {
  return await request({ method: 'post', url: '/gs-api/recharge/submitRecharge' ,data: data});
};

//三方游戏
export const goPlay = async (data,params) => {
  return await request({ method: 'post', url: '/gs-game/game/goPlay' ,data: data});
};

//三方游戏余额
export const queryBalance = async (data,params) => {
  return await request({ method: 'post', url: '/gs-game/game/queryBalance' ,data: data});
};

//三方游戏上分
export const upScore = async (data,params) => {
  return await request({ method: 'post', url: '/gs-game/game/upScore' ,data: data});
};

//三方游戏下分
export const downScore = async (data,params) => {
  return await request({ method: 'post', url: '/gs-game/game/downScore' ,data: data});
};


//一键下分
export const downScoreToAll = async (data,params) => {
  return await request({ method: 'post', url: '/gs-game/game/downScoreToAll' ,data: data});
};

//三方游戏列表
export const getThirdPlatformList = async (data,params) => {
  return await request({ method: 'get', url: '/gs-game/game/getThirdPlatformList' ,data: data});
};












//获取指定彩种下的所有盘口以及玩法
export const getAllPlay = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/getAllPlay/' +  data,data: data});
};

//获取指定彩种下所有玩法的号码以及赔率
export const getAllOdds = async (lotteryCode,playCode) => {
  return await request({ method: 'get', url: '/lottery/v2/getAllOdds/' +  lotteryCode + '/' + playCode});
};

//获取当前期和上期开奖
export const lotteryQsTime = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/lotteryQsTime',data:data});
};

//投注
export const bet = async (data,params) => {
  return await request({ method: 'post', url: '/lottery/v2/bet',data:data});
};

//历史开奖
export const openHistoryList = async (data,params) => {
  return await request({ method: 'get', url: '/lottery/openHistory/list',data:data});
};


//获取钱包
export const walletList = async (data,params) => {
  return await request({ method: 'get', url: '/home/walletList',data:data});
};

//绑定
export const bindWalletAccount = async (data,params) => {
  return await request({ method: 'post', url: '/user/bindWalletAccount',data:data});
};
// 代理中心 下级列表
export const subList = async (data,params) => {
  return await request({ method: 'get', url: '/agent/subList',data:data});
};
// 今日收益
export const todayEarnings = async (data,params) => {
  return await request({ method: 'get', url: '/agent/todayEarnings',data:data});
};
// 赔率计算
export const oddsCalculation = async (data,params) => {
  return await request({ method: 'get', url: '/agent/oddsCalculation',data:data});
};
// 个人返点信息
export const userRate = async (data,params) => {
  return await request({ method: 'get', url: '/agent/userRate',data:data});
};
// 下级开户
export const agentRegister = async (data,params) => {
  return await request({ method: 'post', url: '/agent/register',data:data});
};
// 新增邀请码
export const addReferralCode = async (data,params) => {
  return await request({ method: 'post', url: '/agent/addReferralCode',data:data});
};
// 邀请码列表
export const referralCodeList = async (data,params) => {
  return await request({ method: 'get', url: '/agent/referralCodeList',data:data});
};
// 删除邀请码
export const delReferralCode = async (data,params) => {
  return await request({ method: 'post', url: '/agent/delReferralCode/' +  data,data: data});
};
// 下级财务存款
export const agentDepositRecord = async (data,params) => {
  return await request({ method: 'get', url: '/agent/depositRecord',data:data});
};
// 下级财务首存
export const agentfisrtDeposit = async (data,params) => {
  return await request({ method: 'get', url: '/agent/fisrtDeposit',data:data});
};
// 下级财务取款
export const agentwithdrawRecord = async (data,params) => {
  return await request({ method: 'get', url: '/agent/withdrawRecord',data:data});
};
// 下级财务额度转换
export const eduRecord = async (data,params) => {
  return await request({ method: 'get', url: '/agent/eduRecord',data:data});
};
// 团队账变
export const teamTransaction = async (data,params) => {
  return await request({ method: 'get', url: '/agent/teamTransaction',data:data});
};
// 下级会员资金报表
export const zjReport = async (data,params) => {
  return await request({ method: 'get', url: '/agent/zjReport',data:data});
};
// 下级会员投注报表
export const betReport = async (data,params) => {
  return await request({ method: 'get', url: '/agent/betReport',data:data});
};
// 签到配置
export const signDetail = async (data,params) => {
  return await request({ method: 'get', url: '/activity/sign/detail',data:data});
};
// 签到记录
export const signRecord = async (data,params) => {
  return await request({ method: 'get', url: '/activity/sign/record',data:data});
};
// 签到
export const signPost = async (data,params) => {
  return await request({ method: 'post', url: '/activity/sign/post',data: data});
};
// 签到状态
export const signStatus = async (data,params) => {
  return await request({ method: 'get', url: '/activity/sign/status',data:data});
};
// 获取账变类型
export const transTypeList = async (data,params) => {
  return await request({ method: 'get', url: '/home/transTypeList',data:data});
};
// 轮盘抽奖次数信息
export const rouletteStatus = async (data,params) => {
  return await request({ method: 'get', url: '/activity/roulette/status',data:data});
};
// 点击抽奖 
export const roulettePost = async (data,params) => {
  return await request({ method: 'post', url: '/activity/roulette/post',data:data});
};
// 轮盘活动详情
export const rouletteDetils = async (data,params) => {
  return await request({ method: 'get', url: '/activity/roulette/detail',data:data});
};
// 轮盘记录 
export const rouletteRecords = async (data,params) => {
  return await request({ method: 'get', url: '/activity/roulette/record',data:data});
};
// 免提直冲详情
export const notWithdrawDetils = async (data,params) => {
  return await request({ method: 'get', url: '/activity/notWithdraw/detail',data:data});
};
// 免提直冲活动提交
export const notWithdrawPost = async (data,params) => {
  return await request({ method: 'post', url: '/activity/notWithdraw/post',data:data});
};
// 免提直冲活动记录
export const notWithdrawRecord = async (data,params) => {
  return await request({ method: 'get', url: '/activity/notWithdraw/record',data:data});
};


































