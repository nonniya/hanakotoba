'use strict';
const userNameInput = document.getElementById('user-named');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');

assessmentButton.addEventListener(
    'click',
    () => {
        const userName = userNameInput.value;
        if(userName.length === 0){
            return;
        }
        
        resultDivision.innerText = '';
        // headerDivision の作成
        const headerDivision = document.createElement('div');
        headerDivision.setAttribute('class', 'card-header text-bg-primary');
        headerDivision.innerText = '診断結果';

        // bodyDivision の作成
        const bodyDivision = document.createElement('div');
        bodyDivision.setAttribute('class', 'card-body');

        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'card-text');
        const result = assessment(userNamed);
        paragraph.innerText = result;
        bodyDivision.appendChild(paragraph);

        // resultDivision に Bootstrap のスタイルを適用する
        resultDivision.setAttribute('class', 'card');

        // headerDivision と bodyDivision を resultDivision に差し込む
        resultDivision.appendChild(headerDivision);
        resultDivision.appendChild(bodyDivision);
    }
);

const answers = [
    '###userName###におすすめの花はアベリアです。アベリアの花言葉には「強運」「謙虚」「謙譲」などがあります。',
    '###userName###におすすめの花はアヤメ(アイリス)です。アヤメの花言葉には「よい便り」「メッセージ」「希望」などがあります。',
    '###userName###におすすめの花はウメです。ウメの花言葉には「高潔」「忠実」「忍耐」などがあります。',
    '###userName###におすすめの花はカスミソウです。カスミソウの花言葉には「清らかな心」「無邪気」「親切」「幸福」などがあります。',
    '###userName###におすすめの花はガーベラです。ガーベラの花言葉には「希望」「常に前進」などがあります。',
    '###userName###におすすめの花はシャクヤクです。シャクヤクの花言葉には「恥じらい」「はにかみ」「謙遜」などがあります。',
    '###userName###におすすめの花はスイレンです。スイレンの花言葉には「清純な心」「信頼」「信仰」などがあります。',
    '###userName###におすすめの花はスズランです。スズランの花言葉には「再び幸せが訪れる」「純粋」「純潔」「謙遜」などがあります。',
    '###userName###におすすめの花はスミレです。スミレの花言葉には「謙虚」「誠実」「小さな幸せ」などがあります。',
    '###userName###におすすめの花はナノハナです。ナノハナの花言葉には「快活」「明るさ」などがあります。',
    '###userName###におすすめの花はヤグルマギクです。ヤグルマギクの花言葉には「繊細」「優美」「教育」「信頼」などがあります。',
    '###userName###におすすめの花はユリです。ユリの花言葉には「純粋」「無垢」「威厳」などがあります。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @returns {string} 診断結果
 */
function assessment(userName){
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i =0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replaceAll('###userName###',userName);
    return result;
}
