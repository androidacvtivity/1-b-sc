(function ($) {
    Drupal.behaviors.bsc1_24 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                return isNumberKey(event);
            });
        }
    }
})(jQuery)

function getMonths($quarter) {
    switch ($quarter) {
        case 1:
            return [1, 2, 3];
            break;
        case 2:
            return [4, 5, 6];
            break;
        case 3:
            return [7, 8, 9];
            break;
        case 4:
            return [10, 11, 12];
            break;
    }
}

function getCountDaysFromTrimester(month) {
    var quarter = parseInt(jQuery('#nalogPeriodQuarter').val());
    var getYear = parseInt(jQuery('#nalogPeriodYear').val());

    var months = getMonths(quarter);
    var getMonth = months[month - 1];

    var countDays = new Date(getYear, getMonth, 0).getDate();

    return countDays;
}

function changeIdCountry(elem) {
    var elemnt = jQuery(elem).closest('tr').find('input.dec_dinamicTable_row_cc');
    if (jQuery(elem).val() == elemnt.val())
        return;

    elemnt.val(jQuery(elem).val()).change();
}

function changeSelectCountry(elem) {
    var getValue = jQuery(elem).val();

    if (jQuery(elem).closest('tr').find('select.dec_dinamicTable_row_cb option[value=' + getValue + ']').length > 0) {
        jQuery(elem).closest('tr').find('select.dec_dinamicTable_row_cb').val(getValue).change();
        return;
    }
    mywebform_alert('Nu exista tara cu acest cod..');
    return;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode < 48 || charCode > 57)
        return false;

    return true;
}

function daysInMonth(month, year) {
    Number(year);
    return new Date(year, month, 0).getDate();
}

function getMonths($quarter) {
    switch ($quarter) {
        case 1:
            return [1, 2, 3];
            break;
        case 2:
            return [4, 5, 6];
            break;
        case 3:
            return [7, 8, 9];
            break;
        case 4:
            return [10, 11, 12];
            break;
    }
}

webform.validators.bsc1_24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    var trimestrial = Drupal.settings.mywebform.values.TRIM;
    var year = Drupal.settings.mywebform.values.YEAR;
    if (parseFloat(trimestrial) == get_trimestrial() && year == get_current_year()) {
        webform.errors.push({
            'fieldName': 'TRIM',
            'msg': Drupal.t('Wrong fiscal period!')
        });
    }


    
   

    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['bsc1_24'] = 1;
    validateWebform();


    
};

function get_trimestrial() {
    var date = new Date();
    return Math.ceil((date.getMonth() + 1) / 3);
}

function get_current_year() {
    var date = new Date();
    return date.getFullYear();
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.weight = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.weight = 9999;
    }

    return toFloat(a.weight) - toFloat(b.weight);
}
