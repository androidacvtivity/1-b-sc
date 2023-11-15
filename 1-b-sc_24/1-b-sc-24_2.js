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

webform.validators.bsc1_24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
    var DecTrmestru = values.nalogPeriodQuarter;
    var DecYear = values.nalogPeriodYear;


    var fields_table2_c1_ = [
        values.dec_table2_row_r2001c1,
        values.dec_table2_row_r2002c1,
        values.dec_table2_row_r200c1,
        values.dec_table2_row_r210c1,
        values.dec_table2_row_r220c1,
        values.dec_table2_row_r230c1,
    ];

    var fields_table2_c2_ = [
        values.dec_table2_row_r2001c2,
        values.dec_table2_row_r2002c2,
        values.dec_table2_row_r200c2,
        values.dec_table2_row_r210c2,
        values.dec_table2_row_r220c2,
        values.dec_table2_row_r230c2,
    ];

    var fields_table2_c3_ = [
        values.dec_table2_row_r2001c3,
        values.dec_table2_row_r2002c3,
        values.dec_table2_row_r200c3,
        values.dec_table2_row_r210c3,
        values.dec_table2_row_r220c3,
        values.dec_table2_row_r230c3,
    ];

    if (
        (
            DecTrmestru !== "1" ||
            DecTrmestru !== "2" ||
            DecTrmestru !== "3" ||
            DecTrmestru !== "4"
        ) &&
        (DecTrmestru !== "201")
    ) {
        if (DecYear.substring(0, 2) == '20') {
            var luna1 = 1;
            var luna2 = 2;
            var luna3 = 3;

            if (DecTrmestru == 1) {
                luna1 = 1;
                luna2 = 2;
                luna3 = 3;
            }
            if (DecTrmestru == 2) {
                luna1 = 4;
                luna2 = 5;
                luna3 = 6;
            }
            if (DecTrmestru == 3) {
                luna1 = 7;
                luna2 = 8;
                luna3 = 9;
            }
            if (DecTrmestru == 4) {
                luna1 = 10;
                luna2 = 11;
                luna3 = 12;
            }

            /*19-201. Rind.200 Col1 * numarul de zile in luna de raport ≥  Rind.210 Col1*/
          
            var zileLuna1 = 0;
            // if (!isNaN(parseInt(values['dec_table2_row_r230c1']))) {
            //     zileLuna1 = parseInt(values['dec_table2_row_r230c1']);
            // }
            var zileLuna2 = 0;
            // if (!isNaN(parseInt(values['dec_table2_row_r230c2']))) {
            //     zileLuna2 = parseInt(values['dec_table2_row_r230c2']);
            // }
            var zileLuna3 = 0;
            // if (!isNaN(parseInt(values['dec_table2_row_r230c3']))) {
            //     zileLuna3 = parseInt(values['dec_table2_row_r230c3']);
            // }

            // if ((values.dec_table2_row_r200c1 !== '' && parseInt(values.dec_table2_row_r200c1) >= 0) && (values.dec_table2_row_r210c1 !== '' && parseInt(values.dec_table2_row_r210c1) >= 0)) {
            //     if ((parseInt(values.dec_table2_row_r200c1) * zileLuna1) < parseInt(values.dec_table2_row_r210c1)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r200c1',
            //             'weight': 201,
            //             'msg': Drupal.t('Cod eroare: 19-201. Rind.200 Col1 * numarul de zile in luna de raport ≥ Rind.210 Col1')
            //         });
            //     }
            // }

            // if ((values.dec_table2_row_r200c1 == '' || parseInt(values.dec_table2_row_r200c1) == 0) && (values.dec_table2_row_r210c1 != '' && parseInt(values.dec_table2_row_r210c1) >= 0)) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table2_row_r200c1',
            //         'weight': 201,
            //         'msg': Drupal.t('Cod eroare: 19-201. Rind.200 Col1 * numarul de zile in luna de raport ≥  Rind.210 Col1')
            //     });
            // }

            /*19-202. Rind.200 Col2 * numarul de zile in luna de raport  ≥  Rind.210 Col2 */
            // if ((values.dec_table2_row_r200c2 != '' && parseInt(values.dec_table2_row_r200c2) >= 0) && (values.dec_table2_row_r210c2 != '' && parseInt(values.dec_table2_row_r210c2) >= 0)) {
            //     if ((parseInt(values.dec_table2_row_r200c2) * zileLuna2) < parseInt(values.dec_table2_row_r210c2)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r200c2',
            //             'weight': 202,
            //             'msg': Drupal.t('Cod eroare: 19-202. Rind.200 Col2 * numarul de zile in luna de raport ≥ Rind.210 Col2')
            //         });
            //     }
            // }

            // if ((values.dec_table2_row_r200c2 == '' || parseInt(values.dec_table2_row_r200c2) == 0) && (values.dec_table2_row_r210c2 != '' && parseInt(values.dec_table2_row_r210c2) >= 0)) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table2_row_r200c2',
            //         'weight': 202,
            //         'msg': Drupal.t('Cod eroare: 19-202. Rind.200 Col2 * numarul de zile in luna de raport ≥ Rind.210 Col2')
            //     });
            // }

            /*19-203. Rind.200 Col3 * numarul de zile in luna de raport  ≥  Rind.210 Col2 */
            // if ((values.dec_table2_row_r200c3 != '' && parseFloat(values.dec_table2_row_r200c3) >= 0) && (values.dec_table2_row_r210c3 != '' && parseFloat(values.dec_table2_row_r210c3) >= 0)) {
            //     if ((parseFloat(values.dec_table2_row_r200c3) * zileLuna3) < parseFloat(values.dec_table2_row_r210c3)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r200c3',
            //             'weight': 203,
            //             'msg': Drupal.t('Cod eroare: 19-203. Rind.200 Col3 * numarul de zile in luna de raport ≥ Rind.210 Col3')
            //         });
            //     }
            // }

            // if ((values.dec_table2_row_r200c3 == '' || parseFloat(values.dec_table2_row_r200c3) == 0) && (values.dec_table2_row_r210c3 != '' && parseFloat(values.dec_table2_row_r210c3) >= 0)) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table2_row_r200c3',
            //         'weight': 203,
            //         'msg': Drupal.t('Cod eroare: 19-203. Rind.200 Col3 * numarul de zile in luna de raport ≥ Rind.210 Col3')
            //     });
            // }

            /*******************************************************************/
            /*19-2010. Rind.2001 Col1 * numarul de zile in luna de raport ≥  Rind.210 Col1*/
            // if ((values.dec_table2_row_r2001c1 != '' && parseFloat(values.dec_table2_row_r2001c1) >= 0) && (values.dec_table2_row_r210c1 != '' && parseFloat(values.dec_table2_row_r210c1) >= 0)) {
            //     if ((parseFloat(values.dec_table2_row_r2001c1) * zileLuna1) < parseFloat(values.dec_table2_row_r210c1)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r2001c1',
            //             'weight': 2010,
            //             'msg': Drupal.t('Cod eroare: 19-2010. Rind.2001 Col1 * numarul de zile in luna de raport ≥ Rind.210 Col1')
            //         });
            //     }
            // }

            // if ((values.dec_table2_row_r2001c1 == '' || parseFloat(values.dec_table2_row_r2001c1) == 0) && (values.dec_table2_row_r210c1 != '' && parseFloat(values.dec_table2_row_r210c1) >= 0)) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table2_row_r2001c1',
            //         'weight': 2010,
            //         'msg': Drupal.t('Cod eroare: 19-2010. Rind.2001 Col1 * numarul de zile in luna de raport ≥ Rind.210 Col1')
            //     });
            // }

            /*19-2011. Rind.2001 Col2 * numarul de zile in luna de raport  ≥  Rind.210 Col2 */
            // if ((values.dec_table2_row_r2001c2 != '' && parseFloat(values.dec_table2_row_r2001c2) >= 0) && (values.dec_table2_row_r210c2 != '' && parseFloat(values.dec_table2_row_r210c2) >= 0)) {
            //     if ((parseFloat(values.dec_table2_row_r2001c2) * zileLuna2) < parseFloat(values.dec_table2_row_r210c2)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r2001c2',
            //             'weight': 2011,
            //             'msg': Drupal.t('Cod eroare: 19-2011. Rind.2001 Col2 * numarul de zile in luna de raport ≥ Rind.210 Col2')
            //         });
            //     }
            // }

            // if ((values.dec_table2_row_r2001c2 == '' || parseFloat(values.dec_table2_row_r2001c2) == 0) && (values.dec_table2_row_r210c2 != '' && parseFloat(values.dec_table2_row_r210c2) >= 0)) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table2_row_r2001c2',
            //         'weight': 2011,
            //         'msg': Drupal.t('Cod eroare: 19-2011. Rind.2001 Col2 * numarul de zile in luna de raport ≥  Rind.210 Col2')
            //     });
            // }

            /*19-2012. Rind.2003 Col3 * numarul de zile in luna de raport  ≥  Rind.210 Col2 */
            // if ((values.dec_table2_row_r2001c3 != '' && parseFloat(values.dec_table2_row_r2001c3) >= 0) && (values.dec_table2_row_r210c3 != '' && parseFloat(values.dec_table2_row_r210c3) >= 0)) {
            //     if ((parseFloat(values.dec_table2_row_r2001c3) * zileLuna3) < parseFloat(values.dec_table2_row_r210c3)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r2001c3',
            //             'weight': 2012,
            //             'msg': Drupal.t('Cod eroare: 19-2012. Rind.2001 Col3 * numarul de zile in luna de raport ≥  Rind.210 Col3')
            //         });
            //     }
            // }

            // if ((values.dec_table2_row_r2001c3 == '' || parseFloat(values.dec_table2_row_r2001c3) == 0) && (values.dec_table2_row_r210c3 != '' && parseFloat(values.dec_table2_row_r210c3) >= 0)) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table2_row_r2001c3',
            //         'weight': 2012,
            //         'msg': Drupal.t('Cod eroare: 19-2012. Rind.2001 Col3 * numarul de zile in luna de raport ≥ Rind.210 Col3')
            //     });
            // }

            /*******************************************************************/
            /*19-204. Rînd 230 ≤ numărul de zile în luna de raport Col1 */
            // if (values.dec_table2_row_r230c1 != '' && parseFloat(values.dec_table2_row_r230c1) >= 0) {
            //     if (parseInt(values.dec_table2_row_r230c1) > daysInMonth(luna1, DecYear)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r230c1',
            //             'weight': 204,
            //             'msg': Drupal.t('Cod eroare: 19-204. Rînd 230 ≤ numărul de zile în luna de raport Col1')
            //         });
            //     }
            // }

            /*19-204. Rînd 230 ≤ numărul de zile în luna de raport Col2 */
            // if (values.dec_table2_row_r230c2 != '' && parseFloat(values.dec_table2_row_r230c2) >= 0) {
            //     if (parseFloat(values.dec_table2_row_r230c2) > daysInMonth(luna2, DecYear)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r230c2',
            //             'weight': 204,
            //             'msg': Drupal.t('Cod eroare: 19-204. Rînd 230 ≤ numărul de zile în luna de raport Col2')
            //         });
            //     }
            // }

            /*19-204. Rînd 230 ≤ numărul de zile în luna de raport Col3 */
            // if (values.dec_table2_row_r230c3 != '' && parseInt(values.dec_table2_row_r230c3) >= 0) {
            //     if (parseFloat(values.dec_table2_row_r230c3) > daysInMonth(luna3, DecYear)) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r230c3',
            //             'weight': 204,
            //             'msg': Drupal.t('Cod eroare: 19-204. Rînd 230 ≤ numărul de zile în luna de raport Col3')
            //         });
            //     }
            // }

            /*19-205. Rînd 230 ≤ numărul de zile în luna de raport Col3 */
            var var240 = 0;
            // if (!isNaN(parseInt(values['dec_table1_row_r240']))) {
            //     var240 = parseInt(values['dec_table1_row_r240']);
            // }
            var var250 = 0;
            // if (!isNaN(parseInt(values['dec_table1_row_r250']))) {
            //     var250 = parseInt(values['dec_table1_row_r250']);
            // }

            // if (var240 < var250) {
            //     webform.errors.push({
            //         'fieldName': 'dec_table1_row_r250',
            //         'weight': 205,
            //         'msg': Drupal.t('Cod eroare: 19-205. Rînd 240 ≥ Rînd 250')
            //     });
            // }

            /*******************************************************************/

            // if (
            //     (values.dec_table2_row_r200c1 !== '' && parseFloat(values.dec_table2_row_r200c1) >= 0) &&
            //     (values.dec_table2_row_r210c1 !== '' && parseFloat(values.dec_table2_row_r210c1) >= 0) &&
            //     (values.dec_table2_row_r230c1 !== '' && parseFloat(values.dec_table2_row_r230c1) >= 0)
            // ) {
            //     if (
            //         (parseFloat(values.dec_table2_row_r210c1) / (parseFloat(values.dec_table2_row_r200c1) * parseFloat(values.dec_table2_row_r230c1))) >
            //         daysInMonth(luna1, DecYear)
            //     ) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r200c1',
            //             'weight': 206,
            //             'msg': Drupal.t('Cod eroare: 19-206. Rînd 210 col.1 / (Rînd 200 * Rînd 230) ≤ numărul de zile în luna de raport')
            //         });
            //     }
            // }

            // if (
            //     (values.dec_table2_row_r200c2 !== '' && parseFloat(values.dec_table2_row_r200c2) >= 0) &&
            //     (values.dec_table2_row_r210c2 !== '' && parseFloat(values.dec_table2_row_r210c2) >= 0) &&
            //     (values.dec_table2_row_r230c2 !== '' && parseFloat(values.dec_table2_row_r230c2) >= 0)
            // ) {
            //     if (
            //         (parseFloat(values.dec_table2_row_r210c2) / (parseFloat(values.dec_table2_row_r200c2) * parseFloat(values.dec_table2_row_r230c2))) >
            //         daysInMonth(luna2, DecYear)
            //     ) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r200c2',
            //             'weight': 207,
            //             'msg': Drupal.t('Cod eroare: 19-207. Rînd 210 col.2 / (Rînd 200 * Rînd 230) ≤ numărul de zile în luna de raport')
            //         });
            //     }
            // }

            // if (
            //     (values.dec_table2_row_r200c3 !== '' && parseFloat(values.dec_table2_row_r200c3) >= 0) &&
            //     (values.dec_table2_row_r210c3 !== '' && parseFloat(values.dec_table2_row_r210c3) >= 0) &&
            //     (values.dec_table2_row_r230c3 !== '' && parseFloat(values.dec_table2_row_r230c3) >= 0)
            // ) {
            //     if (
            //         (parseFloat(values.dec_table2_row_r210c3) / (parseFloat(values.dec_table2_row_r200c3) * parseFloat(values.dec_table2_row_r230c3))) >
            //         daysInMonth(luna3, DecYear)
            //     ) {
            //         webform.errors.push({
            //             'fieldName': 'dec_table2_row_r200c3',
            //             'weight': 208,
            //             'msg': Drupal.t('Cod eroare: 19-208. Rînd 210 col.3 / (Rînd 200 * Rînd 230) ≤ numărul de zile în luna de raport')
            //         });
            //     }
            // }

            var var220C1 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r220c1']))) {
                var220C1 = parseInt(values['dec_table2_row_r220c1']);
            }
            var var220C2 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r220c2']))) {
                var220C2 = parseInt(values['dec_table2_row_r220c2']);
            }
            var var220C3 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r220c3']))) {
                var220C3 = parseInt(values['dec_table2_row_r220c3']);
            }

            var var0C1 = 0;
            if (!isNaN(parseInt(values['dec_table1_row_r101c2']))) {
                var0C1 = parseInt(values['dec_table1_row_r101c2']);
            }

            var var0C2 = 0;
            if (!isNaN(parseInt(values['dec_table1_row_r101c4']))) {
                var0C2 = parseInt(values['dec_table1_row_r101c4']);
            }

            var var0C3 = 0;
            if (!isNaN(parseInt(values['dec_table1_row_r101c6']))) {
                var0C3 = parseInt(values['dec_table1_row_r101c6']);
            }

            if (var220C1 * daysInMonth(luna1, DecYear) < var0C1) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r220c1',
                    'weight': 301,
                    'msg': Drupal.t('Cod eroare: 19-301. Rînd 220 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                });
            }
            if (var220C2 * daysInMonth(luna2, DecYear) < var0C2) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r220c2',
                    'weight': 302,
                    'msg': Drupal.t('Cod eroare: 19-302. Rînd 220 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4')
                });
            }
            if (var220C3 * daysInMonth(luna3, DecYear) < var0C3) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r220c3',
                    'weight': 303,
                    'msg': Drupal.t('Cod eroare: 19-303. Rînd 220 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6')
                });
            }

            var var2002C1 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r2002c1']))) {
                var2002C1 = parseInt(values['dec_table2_row_r2002c1']);
            }

            var var2002C2 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r2002c2']))) {
                var2002C2 = parseInt(values['dec_table2_row_r2002c2']);
            }

            var var2002C3 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r2002c3']))) {
                var2002C3 = parseInt(values['dec_table2_row_r2002c3']);
            }

            if (var2002C1 * daysInMonth(luna1, DecYear) < var0C1) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c1',
                    'weight': 304,
                    'msg': Drupal.t('Cod eroare: 19-304. Rînd 2002 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                });
            }

            if (var2002C2 * z(luna2, DecYear) < var0C2) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c2',
                    'weight': 305,
                    'msg': Drupal.t('Cod eroare: 19-305. Rînd 2002 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4')
                });
            }

            if (var2002C3 * daysInMonth(luna3, DecYear) < var0C3) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c3',
                    'weight': 306,
                    'msg': Drupal.t('Cod eroare: 19-306. Rînd 2002 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                });
            }

            var var2001C1 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r2001c1']))) {
                var2001C1 = parseInt(values['dec_table2_row_r2001c1']);
            }

            var var2001C2 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r2001c2']))) {
                var2001C2 = parseInt(values['dec_table2_row_r2001c2']);
            }

            var var2001C3 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r2001c3']))) {
                var2001C3 = parseInt(values['dec_table2_row_r2001c3']);
            }

            if (var2001C1 > var2002C1) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c1',
                    'weight': 501,
                    'msg': Drupal.t('Cod eroare: 19-501. Rînd 2001 col.1 < sau egal rind 2002 col.1')
                });
            }
            if (var2001C2 > var2002C2) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c2',
                    'weight': 502,
                    'msg': Drupal.t('Cod eroare: 19-502. Rînd 2001 col.2 < sau egal rind 2002 col.2')
                });
            }

            if (var2002C3 > var2001C3) {
                var col1_complet = true;
                var col2_complet = true;

                for (var q = 0; q < fields_table2_c1_.length; q++) {
                    if (fields_table2_c1_[q] === "" || fields_table2_c1_[q] === "0") {
                        col1_complet = false;
                        break;
                    }
                }

                for (q = 0; q < fields_table2_c2_.length; q++) {
                    if (fields_table2_c2_[q] === "" || fields_table2_c2_[q] === "0") {
                        col2_complet = false;
                        break;
                    }
                }
            }

            if (var2001C3 > var2002C3) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c3',
                    'weight': 503,
                    'msg': Drupal.t('Cod eroare: 19-503. Rînd 2001 col.3 < sau egal rind 2002 col.3')
                });
            }

            /************************/
            var var200C1 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r200c1']))) {
                var200C1 = parseInt(values['dec_table2_row_r200c1']);
            }
            var var200C2 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r200c2']))) {
                var200C2 = parseInt(values['dec_table2_row_r200c2']);
            }

            var var200C3 = 0;
            if (!isNaN(parseInt(values['dec_table2_row_r200c3']))) {
                var200C3 = parseInt(values['dec_table2_row_r200c3']);
            }

            if (var200C1 > var220C1) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r200c1',
                    'weight': 504,
                    'msg': Drupal.t('Cod eroare: 19-504. Rînd 200 col.1 < sau egal rind 220 col.1')
                });
            }
            if (var200C2 > var220C2) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r200c2',
                    'weight': 505,
                    'msg': Drupal.t('Cod eroare: 19-505. Rînd 200 col.2 < sau egal rind 220 col.2')
                });
            }
            if (var200C3 > var220C3) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r200c3',
                    'weight': 506,
                    'msg': Drupal.t('Cod eroare: 19-506. Rînd 200 col.3 < sau egal rind 220 col.3')
                });
            }

            if (var2001C1 < var200C1) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2001c1',
                    'weight': 410,
                    'msg': Drupal.t('Cod eroare: 19-410. Rînd 2001, col.1 > sau egal rînd 200, col.1', {})
                });
            }

            if (var2001C2 < var200C2) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2001c2',
                    'weight': 410,
                    'msg': Drupal.t('Cod eroare: 19-410. Rînd 2001, col.2 > sau egal rînd 200, col.2', {})
                });
            }

            if (var2001C3 < var200C3) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2001c3',
                    'weight': 410,
                    'msg': Drupal.t('Cod eroare: 19-410. Rînd 2001, col.3 > sau egal rînd 200, col.3', {})
                });
            }

            /*19-411*/
            if (var2002C1 < var220C1) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c1',
                    'msg': Drupal.t('Cod eroare: 19-411. Rînd 2002, col.1 > sau egal rînd 220, col.1', {})
                });
            }

            if (var2002C2 < var220C2) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c2',
                    'weight': 411,
                    'msg': Drupal.t('Cod eroare: 19-411. Rînd 2002, col.2 > sau egal rînd 220, col.2', {})
                });
            }

            if (var2002C3 < var220C3) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c3',
                    'weight': 411,
                    'msg': Drupal.t('Cod eroare: 19-411. Rînd 2002, col.3 > sau egal rînd 220, col.3', {})
                });
            }

            /*******************************************************************/
            var Col1_ = 0;
            var Col2_ = 0;

            var Col3_ = 0;
            var Col4_ = 0;

            var Col5_ = 0;
            var Col6_ = 0;
            if (!isNaN(parseInt(values['dec_table1_row_r102c1']))) {
                Col1_ = parseInt(values['dec_table1_row_r102c1']);
            }
            if (!isNaN(parseInt(values['dec_table1_row_r102c2']))) {
                Col2_ = parseInt(values['dec_table1_row_r102c2']);
            }
            if (!isNaN(parseInt(values['dec_table1_row_r102c3']))) {
                Col3_ = parseInt(values['dec_table1_row_r102c3']);
            }
            if (!isNaN(parseInt(values['dec_table1_row_r102c4']))) {
                Col4_ = parseInt(values['dec_table1_row_r102c4']);
            }
            if (!isNaN(parseInt(values['dec_table1_row_r102c5']))) {
                Col5_ = parseInt(values['dec_table1_row_r102c5']);
            }
            if (!isNaN(parseInt(values['dec_table1_row_r102c6']))) {
                Col6_ = parseInt(values['dec_table1_row_r102c6']);

            }
            /************************************************/
            if ((Col1_ != 0) || (Col2_ != 0)) {
                if (Col1_ > Col2_) {
                    webform.errors.push({
                        'fieldName': 'dec_table1_row_r102c1',
                        'weight': 25,
                        'msg': Drupal.t('Cod eroare: 19-25.  Col.2 (Codurile Tarilor) ≥ Col.1 (Codurile Tarilor)')
                    });
                }
            }
            if ((Col3_ != 0) || (Col4_ != 0)) {
                if (Col3_ > Col4_) {
                    webform.errors.push({
                        'fieldName': 'dec_table1_row_r102c3',
                        'weight': 26,
                        'msg': Drupal.t('Cod eroare: 19-26.  Col.4 (Codurile Tarilor) ≥ Col.3 (Codurile Tarilor)')
                    });
                }
            }
            if ((Col5_ != 0) || (Col6_ != 0)) {
                if (Col5_ > Col6_) {
                    webform.errors.push({
                        'fieldName': 'dec_table1_row_r102c5',
                        'weight': 27,
                        'msg': Drupal.t('Cod eroare: 19-27.  Col.6 (Codurile Tarilor) ≥ Col.5 (Codurile Tarilor)')
                    });
                }
            }
            var fields_table1_cod = jQuery('#tab_con tbody tr td:nth-child(3)').find('input');

            var fields_table1_c1 = jQuery('#tab_con tbody tr td:nth-child(4)').find('input');
            var fields_table1_c2 = jQuery('#tab_con tbody tr td:nth-child(5)').find('input');

            var fields_table1_c3 = jQuery('#tab_con tbody tr td:nth-child(6)').find('input');
            var fields_table1_c4 = jQuery('#tab_con tbody tr td:nth-child(7)').find('input');

            var fields_table1_c5 = jQuery('#tab_con tbody tr td:nth-child(8)').find('input');
            var fields_table1_c6 = jQuery('#tab_con tbody tr td:nth-child(9)').find('input');

            for (var i = 0; i < values.dec_dinamicTable_row_c1.length; i++) {
                /*19-25  Col.2 (Codurile Tarilor) ≥ Col.1 (Codurile Tarilor)  */
                var Col1 = jQuery(fields_table1_c1[i]).val();
                var Col2 = jQuery(fields_table1_c2[i]).val();

                var Col3 = jQuery(fields_table1_c3[i]).val();
                var Col4 = jQuery(fields_table1_c4[i]).val();

                var Col5 = jQuery(fields_table1_c5[i]).val();
                var Col6 = jQuery(fields_table1_c6[i]).val();

                if (!isNaN(parseInt(jQuery(fields_table1_c1[i]).val()))) {
                    Col1 = parseInt(jQuery(fields_table1_c1[i]).val());
                }
                if (!isNaN(parseInt(jQuery(fields_table1_c2[i]).val()))) {
                    Col2 = parseInt(jQuery(fields_table1_c2[i]).val());
                }
                if (!isNaN(parseInt(jQuery(fields_table1_c3[i]).val()))) {
                    Col3 = parseInt(jQuery(fields_table1_c3[i]).val());
                }
                if (!isNaN(parseInt(jQuery(fields_table1_c4[i]).val()))) {
                    Col4 = parseInt(jQuery(fields_table1_c4[i]).val());
                }
                if (!isNaN(parseInt(jQuery(fields_table1_c5[i]).val()))) {
                    Col5 = parseInt(jQuery(fields_table1_c5[i]).val());
                }
                if (!isNaN(parseInt(jQuery(fields_table1_c6[i]).val()))) {
                    Col6 = parseInt(jQuery(fields_table1_c6[i]).val());
                }

                if ((Col1 != 0) || (Col2 != 0)) {
                    if (Col1 > Col2) {
                        if (jQuery(fields_table1_cod[i]).val() == '') {
                            alert("Selectati tara");
                        } else {
                            webform.errors.push({
                                'fieldName': 'dec_dinamicTable_row_c1',
                                'weight': 25,
                                'index': i,
                                'msg': Drupal.t('Cod eroare: 19-25.  Col.2 (Codurile Tarilor) ≥ Col.1 (Codurile Tarilor)')
                            });
                        }
                    }
                }
                if ((Col3 != 0) || (Col4 != 0)) {
                    if (Col3 > Col4) {
                        if (jQuery(fields_table1_cod[i]).val() == '') {
                            alert("Selectati tara");
                        } else {
                            webform.errors.push({
                                'fieldName': 'dec_dinamicTable_row_c3',
                                'weight': 26,
                                'index': i,
                                'msg': Drupal.t('Cod eroare: 19-26.  Col.4 (Codurile Tarilor) ≥ Col.3 (Codurile Tarilor)')
                            });
                        }
                    }
                }
                if ((Col5 != 0) || (Col6 != 0)) {
                    if (Col5 > Col6) {
                        if (jQuery(fields_table1_cod[i]).val() == '') {
                            alert("Selectati tara");
                        } else {
                            webform.errors.push({
                                'fieldName': 'dec_dinamicTable_row_c5',
                                'weight': 27,
                                'index': i,
                                'msg': Drupal.t('Cod eroare: 19-27.  Col.6 (Codurile Tarilor) ≥ Col.5 (Codurile Tarilor)')
                            });
                        }
                    }
                }
            }

            /*19-28.Rînd 000 col.1 + Rînd 000 col.3 + Rînd 000 col.5 ≥ Rînd 170 */
            var col001 = 0;
            var col003 = 0;
            var col005 = 0;
            var col00170 = 0;

            if (values.dec_table1_row_r101c1 != '') {
                col001 = parseInt(values.dec_table1_row_r101c1);
            }

            if (values.dec_table1_row_r101c3 != '') {
                col003 = parseInt(values.dec_table1_row_r101c3);
            }

            if (values.dec_table1_row_r101c5 != '') {
                col005 = parseInt(values.dec_table1_row_r101c5);
            }

            if (values.dec_table1_row_r170 != '') {
                col00170 = parseInt(values.dec_table1_row_r170);
            }

            var col00180 = 0;

            if (values.dec_table1_row_r180 != '') {
                col00180 = parseInt(values.dec_table1_row_r180);
            }

            if ((col001 + col003 + col005) < col00170) {
                webform.errors.push({
                    'fieldName': 'dec_table1_row_r170',
                    'weight': 28,
                    'msg': Drupal.t('Cod eroare: 19-28. Rînd 000 col.1 + Rînd 000 col.3 + Rînd 000 col.5 ≥ Rînd 170')
                });
            }

            /*19-30.Rînd 000 col.1 + Rînd 000 col.3 + Rînd 000 col.5 ≥ Rînd 170 */
            var col001_ = 0;
            var col003_ = 0;
            var col005_ = 0;

            if (values.dec_table1_row_r103c1 != '') {
                col001_ = parseInt(values.dec_table1_row_r103c1);
            }

            if (values.dec_table1_row_r103c3 != '') {
                col003_ = parseInt(values.dec_table1_row_r103c3);
            }

            if (values.dec_table1_row_r103c5 != '') {
                col005_ = parseInt(values.dec_table1_row_r103c5);
            }

            var qwq = col001_ + col003_ + col005_;
            if ((col001_ + col003_ + col005_) < col00180) {
                webform.errors.push({
                    'fieldName': 'dec_table1_row_r180',
                    'weight': 30,
                    'msg': Drupal.t('Cod eroare: 19-30. Rînd 999 col.1 + Rînd 999 col.3 + Rînd 999 col.5 ≥ Rînd 180')
                });
            }

            /*19-29.Rînd 170 ≥ Rînd 180 */
            if (col00170 < col00180) {
                webform.errors.push({
                    'fieldName': 'dec_table1_row_r170',
                    'weight': 29,
                    'msg': Drupal.t('Cod eroare: 19-29.Rînd 170 ≥ Rînd 180')
                });
            }

            /*19-301.Rînd 220 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2 */
            if ((values.dec_table2_row_r220c1 != '' && parseFloat(values.dec_table2_row_r220c1) >= 0) && (values.dec_table1_row_r101c2 != '' && parseFloat(values.dec_table1_row_r101c2) >= 0)) {
                if ((parseFloat(values.dec_table2_row_r220c1) * daysInMonth(luna1, DecYear)) < parseFloat(values.dec_table1_row_r101c2)) {
                    webform.errors.push({
                        'fieldName': 'dec_table2_row_r220c1',
                        'weight': 301,
                        'msg': Drupal.t('Cod eroare: 19-301. Rînd 220 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                    });
                }
            }
            if ((values.dec_table2_row_r220c1 == '' || parseFloat(values.dec_table2_row_r220c1) == 0) && (values.dec_table1_row_r101c2 != '' && parseFloat(values.dec_table1_row_r101c2) >= 0)) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r220c1',
                    'weight': 301,
                    'msg': Drupal.t('Cod eroare: 19-301. Rînd 220 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                });
            }

            /*******************************************************************/

            /*19-302.Rînd 220 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4 */

            if ((values.dec_table2_row_r220c2 != '' && parseFloat(values.dec_table2_row_r220c2) >= 0) && (values.dec_table1_row_r101c4 != '' && parseFloat(values.dec_table1_row_r101c4) >= 0)) {
                if ((parseFloat(values.dec_table2_row_r220c2) * daysInMonth(luna2, DecYear)) < parseFloat(values.dec_table1_row_r101c4)) {
                    webform.errors.push({
                        'fieldName': 'dec_table2_row_r220c2',
                        'weight': 302,
                        'msg': Drupal.t('Cod eroare: 19-302. Rînd 220 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4')
                    });
                }
            }

            if ((values.dec_table2_row_r220c2 == '' || parseFloat(values.dec_table2_row_r220c2) == 0) && (values.dec_table1_row_r101c4 != '' && parseFloat(values.dec_table1_row_r101c4) >= 0)) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r220c2',
                    'weight': 302,
                    'msg': Drupal.t('Cod eroare: 19-302. Rînd 220 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4')
                });
            }

            /*******************************************************************/
            /*19-303.Rînd 220 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6 */
            if ((values.dec_table2_row_r220c3 != '' && parseFloat(values.dec_table2_row_r220c3) >= 0) && (values.dec_table1_row_r101c6 != '' && parseFloat(values.dec_table1_row_r101c6) >= 0)) {
                if ((parseFloat(values.dec_table2_row_r220c3) * daysInMonth(luna3, DecYear)) < parseFloat(values.dec_table1_row_r101c6)) {
                    webform.errors.push({
                        'fieldName': 'dec_table2_row_r220c3',
                        'weight': 303,
                        'msg': Drupal.t('Cod eroare: 19-303. Rînd 220 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6')
                    });
                }
            }

            if ((values.dec_table2_row_r220c3 == '' || parseFloat(values.dec_table2_row_r220c3) == 0) && (values.dec_table1_row_r101c6 != '' && parseFloat(values.dec_table1_row_r101c6) >= 0)) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r220c3',
                    'weight': 303,
                    'msg': Drupal.t('Cod eroare: 19-303.Rînd 220 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6')
                });
            }

            /*19-304.Rînd 2002 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2 */

            if ((values.dec_table2_row_r2002c1 != '' && parseFloat(values.dec_table2_row_r2002c1) >= 0) && (values.dec_table1_row_r101c2 != '' && parseFloat(values.dec_table1_row_r101c2) >= 0)) {
                if ((parseFloat(values.dec_table2_row_r2002c1) * daysInMonth(luna1, DecYear)) < parseFloat(values.dec_table1_row_r101c2)) {
                    webform.errors.push({
                        'fieldName': 'dec_table2_row_r2002c1',
                        'weight': 304,
                        'msg': Drupal.t('Cod eroare: 19-304. Rînd 2002 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                    });
                }
            }
            if ((values.dec_table2_row_r2002c1 == '' || parseFloat(values.dec_table2_row_r2002c1) == 0) && (values.dec_table1_row_r101c2 != '' && parseFloat(values.dec_table1_row_r101c2) >= 0)) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c1',
                    'weight': 304,
                    'msg': Drupal.t('Cod eroare: 19-304. Rînd 2002 col.1 * numărul de zile în luna de raport ≥ Rînd 000 col.2')
                });
            }

            /*******************************************************************/

            /*19-305.Rînd 2002 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4 */

            if ((values.dec_table2_row_r2002c2 != '' && parseFloat(values.dec_table2_row_r2002c2) >= 0) && (values.dec_table1_row_r101c4 != '' && parseFloat(values.dec_table1_row_r101c4) >= 0)) {
                if ((parseFloat(values.dec_table2_row_r2002c2) * daysInMonth(luna2, DecYear)) < parseFloat(values.dec_table1_row_r101c4)) {
                    webform.errors.push({
                        'fieldName': 'dec_table2_row_r2002c2',
                        'weight': 305,
                        'msg': Drupal.t('Cod eroare: 19-305. Rînd 2002 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4')
                    });
                }
            }

            if ((values.dec_table2_row_r2002c2 == '' || parseFloat(values.dec_table2_row_r2002c2) == 0) && (values.dec_table1_row_r101c4 != '' && parseFloat(values.dec_table1_row_r101c4) >= 0)) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c2',
                    'weight': 305,
                    'msg': Drupal.t('Cod eroare: 19-305. Rînd 2002 col.2 * numărul de zile în luna de raport ≥ Rînd 000 col.4')
                });
            }

            /*******************************************************************/
            /*19-306.Rînd 2002 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6 */

            if ((values.dec_table2_row_r2002c3 != '' && parseFloat(values.dec_table2_row_r2002c3) >= 0) && (values.dec_table1_row_r101c6 != '' && parseFloat(values.dec_table1_row_r101c6) >= 0)) {
                if ((parseFloat(values.dec_table2_row_r2002c3) * daysInMonth(luna3, DecYear)) < parseFloat(values.dec_table1_row_r101c6)) {
                    webform.errors.push({
                        'fieldName': 'dec_table2_row_r2002c3',
                        'weight': 306,
                        'msg': Drupal.t('Cod eroare: 19-306. Rînd 2002 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6')
                    });
                }
            }

            if ((values.dec_table2_row_r2002c3 == '' || parseFloat(values.dec_table2_row_r2002c3) == 0) && (values.dec_table1_row_r101c6 != '' && parseFloat(values.dec_table1_row_r101c6) >= 0)) {
                webform.errors.push({
                    'fieldName': 'dec_table2_row_r2002c3',
                    'weight': 306,
                    'msg': Drupal.t('Cod eroare: 19-306. Rînd 2002 col.3 * numărul de zile în luna de raport ≥ Rînd 000 col.6')
                });
            }
        }
    }

    var NumVer2 = 0;

    var coountEmptyFieldsTable2C1 = 0;
    var coountCompletFieldsTable2C1 = 0;
    for (q = 0; q < fields_table2_c1_.length; q++) {
        if (fields_table2_c1_[q] === "" || fields_table2_c1_[q] === "0") {
            coountEmptyFieldsTable2C1++;
        } else {
            coountCompletFieldsTable2C1++
        }
    }

    if ((coountEmptyFieldsTable2C1 !== 0) && (coountEmptyFieldsTable2C1 !== fields_table2_c1_.length)) {
        webform.warnings.push({
            'fieldName': 'dec_table1_row_r240',
            'weight': 4021,
            'msg': Drupal.t('Cod eroare: 19-4021. CAP.II Pe COL1 trebuie sa fie completate toate rindurile si Rind.240')
        });
    }

    if (coountCompletFieldsTable2C1 === fields_table2_c1_.length) {
        NumVer2 = 1;
    }

    var coountEmptyFieldsTable2C2 = 0;
    var coountCompletFieldsTable2C2 = 0;
    for (q = 0; q < fields_table2_c2_.length; q++) {
        if (fields_table2_c2_[q] === "" || fields_table2_c2_[q] === "0") {
            coountEmptyFieldsTable2C2++;
        } else {
            coountCompletFieldsTable2C2++;
        }
    }

    if ((coountEmptyFieldsTable2C2 !== 0) && (coountEmptyFieldsTable2C2 !== fields_table2_c2_.length)) {
        webform.warnings.push({
            'fieldName': 'dec_table1_row_r240',
            'weight': 4020,
            'msg': Drupal.t('Cod eroare: 19-4020. CAP.II Pe COL2 trebuie sa fie completate toate rindurile si Rind.240')
        });
    }

    if (coountCompletFieldsTable2C2 === fields_table2_c2_.length) {
        NumVer2 = 1;
    }

    var coountEmptyFieldsTable2C3 = 0;
    var coountCompletFieldsTable2C3 = 0;
    for (q = 0; q < fields_table2_c3_.length; q++) {
        if (fields_table2_c3_[q] === "" || fields_table2_c3_[q] === "0") {
            coountEmptyFieldsTable2C3++;
        } else {
            coountCompletFieldsTable2C3++;
        }
    }

    if ((coountEmptyFieldsTable2C3 !== 0) && (coountEmptyFieldsTable2C3 !== fields_table2_c3_.length)) {
        webform.warnings.push({
            'fieldName': 'dec_table1_row_r240',
            'weight': 4022,
            'msg': Drupal.t('Cod eroare: 19-4022. CAP.II Pe COL3 trebuie sa fie completate toate rindurile  si Rind.240')
        });
    }

    if (coountCompletFieldsTable2C3 === fields_table2_c3_.length) {
        NumVer2 = 1;
    }

    if (values.dec_table1_row_r240 !== "" && values.dec_table1_row_r240 !== "0") {
        if (
            coountEmptyFieldsTable2C1 === fields_table2_c1_.length &&
            coountEmptyFieldsTable2C2 === fields_table2_c2_.length &&
            coountEmptyFieldsTable2C3 === fields_table2_c3_.length
        ) {
            webform.errors.push({
                'fieldName': 'dec_table1_row_r240',
                'weight': 4023,
                'msg': Drupal.t('Cod eroare: 19-4023. Daca exista Rind.240, atunci exista si Col.1 sau Col.2 sau Col.3,pe Rind.*')
            });
        }
    }

    /********************************************/
    if (
        values.dec_table1_row_r101c1 !== '' ||
        values.dec_table1_row_r101c2 !== '' ||
        values.dec_table1_row_r101c3 !== '' ||
        values.dec_table1_row_r101c4 !== '' ||
        values.dec_table1_row_r101c5 !== '' ||
        values.dec_table1_row_r101c6 !== ''
    ) {
        if (NumVer2 === 0) {
            webform.errors.push({
                'fieldName': '',
                'weight': 5014,
                'msg': Drupal.t('Cod eroare: 19-5014. Daca este Cap.I trebuie sa fie si Cap.II')
            });
        }
    }

    var trimestrial = Drupal.settings.mywebform.values.nalogPeriodQuarter;
    var year = Drupal.settings.mywebform.values.nalogPeriodYear;
    if (parseFloat(trimestrial) == get_trimestrial() && year == get_current_year()) {
        webform.errors.push({
            'fieldName': 'nalogPeriodType',
            'msg': Drupal.t('Wrong fiscal period!')
        });
    }

    if (!values.dec_group2_adres) {
        webform.warnings.push({
            "fieldName": "dec_group2_adres",
            "msg": Drupal.t('Câmpul nu este completat')
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
