import "/assets/2/kendo-2024.4.1112/mjs/kendo.autocomplete.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.button.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.dropdownlist.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.menu.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.notification.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.textarea.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.textbox.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.tooltip.js";
import "/assets/2/kendo-2024.4.1112/mjs/kendo.window.js";

kendo.ui.Menu.fn.options.animation.open.duration = 0;
kendo.ui.Menu.fn.options.animation.close.duration = 0;
kendo.ui.Popup.fn.options.animation.open.duration = 0;
kendo.ui.Popup.fn.options.animation.close.duration = 0;

$("header ul.navigation").kendoMenu({
  hoverDelay: 0
});
