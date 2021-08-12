requestIdleCallback(() => {
  var i = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("。", () => (i++, i % 2 ? "&#x1f970;" : "&#x1f60d"))
  var j = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (j++, j % 2 ? ";<p style='margin:0;'></p>" : "	&#x1f48b;<p style='margin:0;'></p>"))
  document.body.innerHTML = document.body.innerHTML.replaceAll("、", "&#x1f3b5;")

  var k = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("さん", () => "チャン")

  var l = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("ありがとうございました", () => "ありがとね(*^^*)")

  var m = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("様", () => "チャン(^^)")


  var n  = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("まことに", () => "ガチで〜")

  var o = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("先日の", () => "この前の〜")

  var p = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("申し訳ございません", () => "ホントゴメンネ！てへぺろwww")

  var q = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("お祈り申し上げます", () => "いのってるネ＼(^o^)／")
})
