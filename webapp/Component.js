sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/xcaret/regactivosfijos/model/models",
    "com/xcaret/regactivosfijos/model/SettingsModel"
], (UIComponent, models, SettingsModel) => {
    "use strict";

    return UIComponent.extend("com.xcaret.regactivosfijos.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            // Set the column settings model
            this.setModel(SettingsModel.createSettingsModelTable(), "settingsModel");
            this.setModel(SettingsModel.createSettingsModelItem(), "createSettingsModelItem");
            // enable routing
            this.getRouter().initialize();
        }
    });
});