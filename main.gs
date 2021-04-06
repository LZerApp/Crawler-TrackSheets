/*
 *  @Project: Flask Crawler Tracking
 *  @Author : Hsins
 *  @E-mail : hsinspeng@gmail.com
 */

// ------------------------------------------------------
// Global Variables Declaration
// ------------------------------------------------------

// Get Sheets

// Get Ranges
const rangeCrawlerID = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("RANGE_CRAWLER_ID");
const rangeCrawlerImportedTime = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("RANGE_CRAWLER_IMPORTEDTIME");

// Get Cells

// Others

// ------------------------------------------------------
// Simple Triggers
// ------------------------------------------------------

// The onOpen function is executed automatically every time a spreadsheet is loaded
const onOpen = () => {
  createCustomMenu();
}

// ------------------------------------------------------
// Custom Menus
// ------------------------------------------------------

const createCustomMenu = () => {
  const UI = SpreadsheetApp.getUi();

  UI.createMenu('⚙️ 擴充工具')
    .addItem('更新匯入時間', 'updateImportedTime')
    .addSeparator()
    .addToUi();
}

// ------------------------------------------------------
// Feature Functions
// ------------------------------------------------------

// Fetch crawler status from application server and update the spreadsheet
const updateImportedTime = () => {
  let values = []
  const result = getCrawlerImportedTime();
  for (let i = 1; i <= rangeCrawlerImportedTime.getNumRows(); i++) {
    if (i in result) {
      values.push([result[i]]);
    } else {
      values.push([''])
    }
  }
  rangeCrawlerImportedTime.setValues(values);
}
