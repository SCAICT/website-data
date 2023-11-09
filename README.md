<!-- @format -->

# website-data

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/SCAICT/website-data/.github%2Fworkflows%2Fevents.yml?label=公告部屬&style=flat-square) ![Workflow](https://img.shields.io/github/deployments/SCAICT/Website/production?label=前端部屬&style=flat-square) ![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&label=格式化風格)

中電會網站資料

## 如何添加公告?

### 首頁公告

![](img/home%20boolean.png)

請編輯 [home.json](home.json) 檔案的公告。

```json
{
    "lcd": {
        "text": "顯示文字",
        "link": "下方按鈕連結"
    }
}
```

### 活動

請以**完全相同格式**添加活動至 [events.md](events.md) 檔案。沒有長度限制，過期活動需手動移除。

```markdown
# 中電會聯合迎新

*   一年一度中電會的電資社團聯合迎新開始報名了！<br>這次的地點在台中高工。透過這次的聯合迎新，各位可以多多認識其他社團和結交各大電神喔！另外，這次活動包含 Python 基礎和爬蟲，也是個學習 Python 的好機會，快點來報名吧！
*   11/12（日）9：30 ～ 17：00
*   台中高工 資訊科工廠四
*   200 元
*   https://scaict.org/src/img/%E8%83%8C%E5%BD%B1.webp
```

> 請勿添加其他 markdown 語法，若需要換行請使用 `<br>`，不要在檔案中換行。空白行將忽略，可視整潔需求添加。
>
> 圖片可選，請貼上圖片連結。若無圖片可以省略。

*活動部屬需要約 30 秒，請耐心等待。*
