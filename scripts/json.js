$(document).ready(function() {
    // объект с данными
    var searchData = [
        "Развод",
        "Банкротство",
        "Банковские переводы",
        "Банковская помощь",
        "Судебная практика",
        "Консультации",
        // ещё варианты
    ];

    function showAutocompleteSuggestions(inputText) {
        // очистка результатов
        $(".autocomplete-list").empty();

        if (inputText.length >= 3) {
            // проход по совпадениям
            searchData.forEach(function(item) {
                if (item.toLowerCase().includes(inputText.toLowerCase())) {
                    $(".autocomplete-list").append("<li>" + item + "</li>");
                }
            });

            $(".autocomplete-list").show();
        } else {
            $(".autocomplete-list").hide();
        }
    }

    $(".header__search").on("input", function() {
        var inputText = $(this).val().trim();

        showAutocompleteSuggestions(inputText);
    });
    $(document).on("click", ".autocomplete-list li", function() {
        var selectedText = $(this).text();
        $(".header__search").val(selectedText);
        $(".autocomplete-list").hide();
    });
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".autocomplete-list, .header__search").length) {
            $(".autocomplete-list").hide();
        }
    });
});

