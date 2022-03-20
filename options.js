// (c) 2022 Ted Kulp - @tedkulp

$(document).ready(() => {
  const shlinkUrl = $("#shlinkUrl");
  const apiKey = $("#apiKey");
  const defaultTags = $("#defaultTags");

  const handleButtonClick = (evt) => {
    if (evt) evt.preventDefault();

    browser.storage.local.set({
      shlinkUrl: shlinkUrl.val(),
      apiKey: apiKey.val(),
      defaultTags: defaultTags.val(),
    });
  };

  browser.storage.local.get().then((data) => {
    console.debug(data);
    shlinkUrl.val(data.shlinkUrl || "");
    apiKey.val(data.apiKey || "");
    defaultTags.val(data.defaultTags || "");
  });

  $("#submitBtn").on("click", handleButtonClick);
});
