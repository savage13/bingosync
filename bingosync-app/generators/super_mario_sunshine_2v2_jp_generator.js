var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var thisVersion = "v3 beta 9";

var bingoList = [];
bingoList[1] = [
{ name: "アルバイトの青コイン3枚" },
{ name: "マンマビーチの青コイン15枚" },
{ name: "ドルピックタウンの青コイン15枚" },
{ name: "モンテ3 ダメージ禁止" },
{ name: "リコハーバーの隠しシャイン1枚" },
{ name: "ターボノズル1つ解放" }
];
bingoList[2] = [
{ name: "3つのステージでコイン50枚(ドルピックタウン以外)" },
{ name: "モンテのむらで100枚コインシャイン取得" },
{ name: "ドルピックタウンでコイン150枚" },
{ name: "木箱3のシャイン" },
{ name: "ドロドロパックン5体すべて撃破" }
];
bingoList[3] = [
{ name: "残機23" },
{ name: "残機28" },
{ name: "リコハーバーで100枚コインシャイン取得" },
{ name: "マンマビーチで100枚コインシャイン取得" },
{ name: "ビアンコヒルズの隠しシャイン1枚" }
];
bingoList[4] = [
{ name: "マンマビーチの青コイン20枚" },
{ name: "双子ラクガキの青コイン5ペア" },
{ name: "4体のボス撃破" },
{ name: "ビアンコ4 ホバー禁止" },
{ name: "100枚コインシャイン2枚取得" }
];
bingoList[5] = [
{ name: "NPCの青コイン5枚 (モンテのむら以外)" },
{ name: "NPCの青コイン9枚" },
{ name: "ビアンコヒルズの青コイン15枚" },
{ name: "シレナビーチのシャイン4枚" },
{ name: "敵から青コイン5枚" }
];
bingoList[6] = [
{ name: "リコ3 ホバー禁止" },
{ name: "隠しシャイン3枚" },
{ name: "シレナビーチの青コイン12枚" },
{ name: "ヒミツ赤のシャイン2枚 ホバー禁止" },
{ name: "マンマビーチの隠しシャイン2枚" }
];
bingoList[7] = [
{ name: "2種類のボス再戦クリア" },
{ name: "リコハーバーのシャイン6枚" },
{ name: "M字から青コイン8枚" },
{ name: "M字から入場するステージのシャイン8枚" },
{ name: "ストーリーのシャイン9枚" }
];
bingoList[8] = [
{ name: "モンテのむらの青コイン16枚" },
{ name: "マンマビーチのシャイン4枚" },
{ name: "ピンナパークのシャイン5枚" },
{ name: "赤コインのシャイン4枚" },
{ name: "ボスのストーリーで100枚コインシャイン取得" }
];
bingoList[9] = [
{ name: "敵から青コイン7枚" },
{ name: "赤コインのシャイン5枚" },
{ name: "リコハーバーの青コイン23枚" },
{ name: "青い鳥の青コイン5枚" },
{ name: "3つのステージから青コイン20枚ずつ取得(ドルピックタウン以外)" },
{ name: "ピンナパークの青コイン16枚" }
];
bingoList[10] = [
{ name: "5体のボス撃破" },
{ name: "ビアンコヒルズで100枚コインシャイン取得" },
{ name: "シレナビーチで100枚コインシャイン取得" },
{ name: "隠しシャイン6枚" },
{ name: "ヒミツ内部でシャイン7枚" }
];
bingoList[11] = [
{ name: "ビアンコヒルズの青コイン20枚" },
{ name: "敵から青コイン4枚 (リコ以外)" },
{ name: "シレナビーチの隠しシャイン1枚" },
{ name: "ヒミツステージのシャイン4枚" },
{ name: "双子ラクガキの青コイン7ペア" }
];
bingoList[12] = [
{ name: "ピンナパークの隠しシャイン1枚" },
{ name: "ピンナパークの青コイン25枚" },
{ name: "2つのステージから青コイン25枚ずつ取得(ドルピックタウン以外)" },
{ name: "隠しシャイン4枚" },
{ name: "黄色ボタンのコイン10枚" }
];
bingoList[13] = [
{ name: "ターボノズル2つ解放" },
{ name: "ピンナ5を裏側からホバー禁止でクリア" },
{ name: "蝶の青コイン1枚(ピンナパーク以外)" },
{ name: "マーレのいりえの青コイン20枚" },
{ name: "シレナ4の隠しシャイン取得" },
];
bingoList[14] = [
{ name: "ベルのシャイン2枚取得か灯台のシャイン取得" },
{ name: "5種類のボス撃破" },
{ name: "2つのステージでヨッシーに乗る" },
{ name: "6体のボス撃破" },
{ name: "赤コインのシャイン6枚" }
];
bingoList[15] = [
{ name: "6つのステージからシャイン2枚ずつ取得(ドルピックタウン以外)" },
{ name: "1つのステージから隠しシャイン2枚取得(マンマビーチ以外)" },
{ name: "マーレのいりえで100枚コインシャイン取得" },
{ name: "ヒミツ内部で100枚コインシャイン取得" },
{ name: "ビアンコヒルズのシャイン5枚" }
];
bingoList[16] = [
{ name: "青い鳥の青コイン7枚" },
{ name: "ピンナパークストーリー8" },
{ name: "マーレのいりえで2体のボス撃破" },
{ name: "大砂鳥のシャインを取得" },
{ name: "大砂鳥の青コイン4枚かウナギの青コイン4枚" }
];
bingoList[17] = [
{ name: "ヒミツステージのシャイン5枚" },
{ name: "3つのステージからシャイン5枚ずつ取得(ドルピックタウン以外)" },
{ name: "ビアンコヒルズストーリー8" },
{ name: "隠しシャイン5枚" },
{ name: "マーレのいりえのシャイン4枚" }
];
bingoList[18] = [
{ name: "金の鳥のシャイン2枚" },
{ name: "ピンナパークで100枚コインシャイン取得" },
{ name: "マーレのいりえの青コイン12枚" },
{ name: "マーレ3でコイン30枚" },
{ name: "チョロプーのストーリーでシャイン4枚取得" }
];
bingoList[19] = [
{ name: "赤コインのシャイン7枚" },
{ name: "マーレのいりえストーリー6かマンマビーチでシャイン6枚取得" },
{ name: "サングラスをかける" },
{ name: "ドルピックタウンでロケットノズル解放" },
{ name: "シャイン26枚" }
];
bingoList[20] = [
{ name: "モンテのむらの隠しシャイン1枚" },
{ name: "ボステレサ撃破" },
{ name: "ノズル4つ解放" },
{ name: "ロケットノズル3つ解放" },
{ name: "100枚コインシャイン3枚取得" }
];
bingoList[21] = [
{ name: "ドルピックタウンのシャイン8枚" },
{ name: "ドルピックタウンのシャイン9枚" },
{ name: "ドルピックタウンのシャイン9枚(青コイン交換あり)" },
{ name: "ドルピックタウンのシャイン13枚(青コイン交換あり)" },
{ name: "2つのステージからシャイン6枚ずつ取得" }
];
bingoList[22] = [
{ name: "4つのステージからシャイン3枚ずつ取得(ドルピックタウン以外)" },
{ name: "4つのステージからシャイン4枚ずつ取得(ドルピックタウン以外)" },
{ name: "各ステージからシャイン1枚ずつ取得(ドルピックタウン以外)" },
{ name: "ステージ内のシャイン14枚" },
{ name: "1つのステージからシャイン9枚取得(ドルピックタウン以外)" }
];
bingoList[23] = [
{ name: "ニセマリオのシャイン2枚取得" },
{ name: "9回土管に入りその先でシャイン回収" },
{ name: "モンテのむらストーリー8" },
{ name: "モンテマンレース2つ" },
{ name: "リコハーバーストーリー8" }
];
bingoList[24] = [
{ name: "青コイン合計45枚" },
{ name: "青コイン合計50枚" },
{ name: "青コイン合計55枚" },
{ name: "3つのステージから青コイン12枚ずつ取得(ドルピックタウン以外)" },
];
bingoList[25] = [
{ name: "青コイン合計70枚" },
{ name: "青コイン合計75枚" },
{ name: "青コイン合計80枚" },
{ name: "4つのステージから青コイン15枚ずつ取得" }
];