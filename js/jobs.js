// 寒假工职位示例数据 —— 换成真实信息时，只改这个文件里的数组就行
// 字段：title, type, city, pay, payUnit, days, dorm, meal, desc, need, contact
const JOBS = [
  {id:1, title:"电子厂组装寒假工", type:"工厂", city:"深圳", pay:5500, payUnit:"元/月", days:"30-45天", dorm:"包住", meal:"包吃", desc:"流水线组装、质检，坐班为主，简单易上手，适合第一次打寒假工的同学。", need:"年满18岁，身份证原件，能接受两班倒", contact:"待填写：招聘负责人 / 电话 / 微信"},
  {id:2, title:"仓库分拣员（夜班补贴）", type:"物流", city:"广州", pay:6000, payUnit:"元/月", days:"30天起", dorm:"包住", meal:"餐补", desc:"快递/电商仓分拣、打包、扫码，按件另有计件奖励。", need:"能吃苦，接受夜班，身体健康", contact:"待填写"},
  {id:3, title:"奶茶店店员", type:"服务", city:"长沙", pay:3200, payUnit:"元/月", days:"灵活排班", dorm:"不包住", meal:"包吃", desc:"点单、制作饮品、收银，门店在商场，客流稳定。", need:"亲和力好，周末能排班", contact:"待填写"},
  {id:4, title:"家教 / 作业辅导老师", type:"教育", city:"线上", pay:120, payUnit:"元/小时", days:"按课时", dorm:"—", meal:"—", desc:"小学/初中语数英辅导，线上授课，时间自己约。", need:"相关科目成绩好，有耐心", contact:"待填写"},
  {id:5, title:"商场促销员", type:"服务", city:"武汉", pay:220, payUnit:"元/天", days:"15-30天", dorm:"不包住", meal:"餐补", desc:"年货节、寒假促销活动，站店介绍产品、发传单。", need:"口齿清楚，能站班", contact:"待填写"},
  {id:6, title:"数据标注员（可远程）", type:"线上", city:"线上", pay:25, payUnit:"元/小时", days:"灵活", dorm:"—", meal:"—", desc:"图片/文本标注，有电脑和网络就能做，按量结算。", need:"细心，有电脑", contact:"待填写"},
  {id:7, title:"餐厅服务员", type:"服务", city:"成都", pay:4200, payUnit:"元/月", days:"30天起", dorm:"包住", meal:"包吃", desc:"传菜、上菜、收台，包吃住，春节期间三倍工资按店里规定算。", need:"能接受春节排班", contact:"待填写"},
  {id:8, title:"食品厂包装工", type:"工厂", city:"东莞", pay:5800, payUnit:"元/月", days:"35天起", dorm:"包住", meal:"包吃", desc:"食品包装、贴标，车间恒温，工衣由厂里提供。", need:"健康证（可协助办理）", contact:"待填写"},
  {id:9, title:"短视频剪辑助理", type:"线上", city:"线上", pay:4000, payUnit:"元/月", days:"按项目", dorm:"—", meal:"—", desc:"剪短视频、加字幕、找素材，会剪映/PR优先。", need:"会基础剪辑，有作品更好", contact:"待填写"},
  {id:10, title:"超市理货员", type:"服务", city:"郑州", pay:3800, payUnit:"元/月", days:"30天", dorm:"不包住", meal:"餐补", desc:"上货、理货、盘点，早晚班轮换。", need:"能搬动轻货，能早班", contact:"待填写"},
  {id:11, title:"客服（在线，夜班补贴）", type:"线上", city:"线上", pay:4500, payUnit:"元/月", days:"30天起", dorm:"—", meal:"—", desc:"在线回复客户问题，打字快，有培训。", need:"打字60字/分钟以上", contact:"待填写"},
  {id:12, title:"寒假工地/展会临时工", type:"其他", city:"杭州", pay:260, payUnit:"元/天", days:"短期", dorm:"包住", meal:"包吃", desc:"展会布展、撤展、搬运，日结或周结，写清楚再去。", need:"体力好，服从安排", contact:"待填写"},
];
