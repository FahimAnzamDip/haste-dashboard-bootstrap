// Styles
import '../scss/style.scss';

// Third Party
import * as bootstrap from 'bootstrap';
import { Datepicker } from 'vanillajs-datepicker';

// Initialize Datepicker
var datepickers = [].slice.call(document.querySelectorAll('[data-datepicker]'));
var datepickersList = datepickers.map(function (el) {
    return new Datepicker(el, {
        buttonClass: 'btn',
    });
});

// Bootstrap Tooltips
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
// Bootstrap Popovers
var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

import SimpleBar from 'simplebar';

// Demos (Replace with real code for production)
import './demos/chart-demo.js';
import './demos/choicejs-demo.js';

// Theme Main
import './haste/haste.js';

// write custom javascript below...