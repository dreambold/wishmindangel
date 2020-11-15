chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {


    if (msg.command == "test") {

        $("a img").each(function() {
            if (jQuery(this).closest("a").find(".btnwish").size() == 0) {
                jQuery(this).closest("a").prepend('<button class = "btnwish" type="button">Wish!</button>')
            }

        });

        $('.btnwish').off("click");
        $('.btnwish').click(function(e) {

            e.preventDefault();
            var obj = {};
            obj["product_url"] = jQuery(this).closest("a").prop("href");
            obj["image_url"] = jQuery(this).closest("a").find("img").eq(0).prop("src");
            obj["description"] = jQuery(this).closest("a").text().trim().replace("Wish!", "");;
            console.log(obj)
            chrome.runtime.sendMessage({
                cmd: 'save',
                data: obj
            });
        })


    }



})

//waitForKeyElements("a img", start);