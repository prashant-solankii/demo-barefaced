var customerDetails = {};
var addressPaymentMethodID = "";
var paymentBillingAddress = {};
var addressesJson = [];
var allSubscrptionsJson = [];
var getAllDiscount = [];
var productsJson = [];
var productsIds = "";
var currentSubscription = {};
var successType = null;
var oneTimeJson = [];
var removeOnetimeID = [];
var upcomingCharge = null;
var shippingAddressID = "";

var subscriptionID = "";
var addressID = "";
var rewardAddress = "";
var rewardAddressID = "";
var rewardDiscountID = "";
var appliedDiscountCode = "";
var rewardDiscountCode = "";
var upcomingAddressChargeID = "";

var onetimeID = "";
var addonProductDataJSON = "";
var addonProductDefaultVariant = "";
var addressUpcomingChargeDate = "";
var addressUpcomingSubscriptionID = "";

var productCurrentVariant = [];
var currentProductOptions = [];
var currentVariantOptions = [];
var currentProductVariantsArray = [];

var addonProductJSON = "";
var addonCurrentVariant = [];
var addonProductOptions = [];
var producVariantsArray = [];

var productHandle = "";
var productsIdJson = {};
var addresseArray = [];
var allAddresseArray = [];
var discountCode = window.globalVariables.discount_code;

var selling_plan_discount = 0;
var productSellingPlanDiscount = 0;

class dashboard extends HTMLElement {
    constructor() {
        super();

        this.dashboard = document.querySelector('[data-dashboard]');
        this.selectors = {
            linkEditBillingAddress: this.dashboard.querySelectorAll('[data-edit-billing-address-link]'),
            btnUpdateShippingAddress: this.dashboard.querySelectorAll('[data-update-shipping-address-btn]'),
            inputUpdateShippingAddress: this.dashboard.querySelectorAll("[shipping-address-validate] input"),
            selectUpdateShippingAddress: this.dashboard.querySelectorAll("[shipping-address-validate] select"),
            btnUpdateEmail: this.dashboard.querySelectorAll('[data-update-email-btn]'),

            modalContent: this.dashboard.querySelectorAll('.modal-content'),
            modalBack: this.dashboard.querySelectorAll('[data-back-modal]'),
            modalClose: this.dashboard.querySelectorAll('[data-close-modal]'),
            modalSuccess: this.dashboard.querySelectorAll('[data-success-modal]'),
            modalBackCancle: this.dashboard.querySelector('[data-back-cancle-modal]'),
            modalBackAddon: this.dashboard.querySelector('[data-back-addon-modal]'),

            modalCommonBox: this.dashboard.querySelector('[data-common-box]'),
            modalDialog: this.dashboard.querySelector('[data-modal-dialog]'),
            modalManageSubscription: this.dashboard.querySelector('[data-manage-subscription-modal]'),
            modalChangeProductSize: this.dashboard.querySelector('[data-change-product-size-modal]'),
            modalChangeDeliveryFrequency: this.dashboard.querySelector('[data-change-delivery-frequency-modal]'),
            modalSkipChangeOrderDate: this.dashboard.querySelector('[data-skip-change-order-date-modal]'),
            modalCancelSubscription: this.dashboard.querySelector('[data-cancel-subscription-modal]'),
            modalBeforeYouGo: this.dashboard.querySelector('[data-before-you-go-modal]'),
            modalConfirmedPopup: this.dashboard.querySelector('[data-confirmed-popup-modal]'),
            modalAddonProducts: this.dashboard.querySelector('[data-addon-products-modal]'),
            modalAddMySubscription: this.dashboard.querySelector('[data-add-mysubscription-modal]'),
            modalAddCurrentSubscription: this.dashboard.querySelector('[data-add-product-subscription-modal]'),
            modalEditShippingAddresss: this.dashboard.querySelector('[data-edit-shipping-address-modal]'),
            modalEditBillingAddresss: this.dashboard.querySelector('[data-data-edit-billing-address-modal]'),

            confirmCommon: this.dashboard.querySelector('[data-common-confirm]'),
            confirmSkipNextDate: this.dashboard.querySelector('[data-skip-next-date-confirm]'),
            confirmChangeNextDate: this.dashboard.querySelector('[data-change-next-date-confirm]'),
            confirmKeepSubscription: this.dashboard.querySelector('[data-keep-subscription-confirm]'),
            confirmCancelSubscription: this.dashboard.querySelector('[data-cancel-subscription-confirm]'),

            divSpinner: this.dashboard.querySelector('[data-spinner]'),
            divNoSubscription: this.dashboard.querySelector('[data-no-subscription]'),
            divSubsciptionsList: this.dashboard.querySelector('[data-subsciptions-list]'),

            divSubscriptionProductVariants: this.dashboard.querySelector('[data-subscription-product-variants-div]'),
            dataSubscriptionProductImg: this.dashboard.querySelector('[data-subscription-product-img]'),
            dataSubscriptionProductTitle: this.dashboard.querySelector('[data-subscription-product-title]'),
            dataSubscriptionProductQty: this.dashboard.querySelector('[data-subscription-product-qty]'),
            btnUpdateSubscription: this.dashboard.querySelectorAll('[data-update-subscription-btn]'),
            btnSubscriptionQtyMinus: this.dashboard.querySelector('[data-subscription-qty-minus-btn]'),
            btnUpdateSubscriptionCancel: this.dashboard.querySelectorAll('[data-update-subscription-cancel-btn]'),

            btnUpdateFrequency: this.dashboard.querySelectorAll('[data-update-frequency-btn]'),
            btnUpdateFrequencyCancel: this.dashboard.querySelectorAll('[data-update-frequency-cancel-btn]'),

            divSkipNextOrder: this.dashboard.querySelector('[data-skip-next-order-div]'),
            divSkipNextOrderDetails: this.dashboard.querySelector('[data-skip-next-order-details-div]'),
            divChangeNextOrder: this.dashboard.querySelector('[data-change-next-order-div]'),
            divChangeNextOrderDetails: this.dashboard.querySelector('[data-change-next-order-details-div]'),
            dataUpcomingOrderDate: this.dashboard.querySelector('[data-upcoming-order-date]'),
            dataUpcomingNextOrderDate: this.dashboard.querySelector('[data-upcoming-next-order-date]'),
            dataChangeNextOrderDate: this.dashboard.querySelector('[data-change-next-order-date]'),
            dataNewNextOrderDate: this.dashboard.querySelectorAll('[data-new-next-order-date]'),
            idChangeNextOrderDate: this.dashboard.querySelector('#changeNextOrderDate'),
            btnSkipNextOrder: this.dashboard.querySelectorAll('[data-skip-next-order-btn]'),
            btnChangeNextOrder: this.dashboard.querySelectorAll('[data-change-next-order-btn]'),
            btnSkipChangeCancel: this.dashboard.querySelectorAll('[data-skip-change-cancel-btn]'),

            btnCancelMySubscription: this.dashboard.querySelectorAll('[data-cancle-my-subscription-btn]'),
            selectCancelSubscriptionReason: this.dashboard.querySelector('[data-cancel-subscription-reason-select]'),
            textCancelSubscriptionReason: this.dashboard.querySelector('[data-cancel-subscription-reason-text]'),
            btnKeepSubscription: this.dashboard.querySelector('[data-keep-subscription-btn]'),
            linkCancleSubscription: this.dashboard.querySelector('[data-cancle-subscription-link]'),

            btnAddAddonProduct: this.dashboard.querySelectorAll('[data-add-addon-product-btn]'),
            dataAddAddonProductImg: this.dashboard.querySelector('[data-addon-product-img]'),
            divAddAddonProductVariants: this.dashboard.querySelector('[data-addon-product-variants-div]'),
            dataAddAddonProductTitle: this.dashboard.querySelector('[data-addon-product-title]'),
            dataAddAddonProductQty: this.dashboard.querySelector('[data-addon-product-qty]'),
            btnAddonQtyMinus: this.dashboard.querySelector('[data-addon-qty-minus-btn]'),
            dataAddonOnetimePrice: this.dashboard.querySelectorAll('[data-addon-onetime-price]'),
            divSubscription: this.dashboard.querySelector('[data-subscription-div]'),
            dataAddonSubscriptionPrice: this.dashboard.querySelectorAll('[data-addon-subscription-price]'),
            dataAddonSubscriptionDiscount: this.dashboard.querySelector('[data-addon-subscription-discount]'),
            divAddonSubscriptionFrequencys: this.dashboard.querySelector('[data-addon-subscription-frequencys-div]'),
            dataAddonSubscriptionFrequency: this.dashboard.querySelector('[data-addon-subscription-frequency]'),
            inputAddonOnetime: this.dashboard.querySelector('[data-addon-onetime-input]'),
            btnAddOnetimeProduct: this.dashboard.querySelector('[data-add-onetime-product-btn'),
            btnAddSubscriptionProduct: this.dashboard.querySelector('[data-add-subscription-product-btn'),
        };

        this.header = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Shop": window.location.origin.split('//')[1]
        }

        if (window.globalVariables.customer_email.length > 0) { this._getCustomerDetails(); }
        if (window.location.href.includes('handle')) {
            const QueryString = window.location.href;
            var hrefArray = QueryString.split('handle=');
            var productHandle = hrefArray[1];
            this._getProductsHandleJson(productHandle);
        }

        // Update Shipping Address
        this.selectors.btnUpdateShippingAddress.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this._updateShippingAddress(event);
            });
        });
        this.selectors.inputUpdateShippingAddress.forEach((element) => {
            element.addEventListener('input', (event) => {
                event.preventDefault();
                document.querySelectorAll('[data-update-shipping-address-btn]').forEach((element) => { element.classList.remove("d-none"); });
                document.querySelectorAll('[data-cancel-shipping-address-btn]').forEach((element) => { element.classList.remove("d-none"); });
            });
        });
        this.selectors.selectUpdateShippingAddress.forEach((element) => {
            element.addEventListener('change', (event) => {
                event.preventDefault();
                document.querySelectorAll('[data-update-shipping-address-btn]').forEach((element) => { element.classList.remove("d-none"); });
                document.querySelectorAll('[data-cancel-shipping-address-btn]').forEach((element) => { element.classList.remove("d-none"); });
            });
        });

        // Update Billing Details (Send Email)
        this.selectors.btnUpdateEmail.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this._updateBillingDetails(event);
            });
        });

        // Update Subscription
        this.selectors.btnUpdateSubscription.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this._updateSubscription(event);
            });
        });

        // Change Product Size/Quantity On Change
        document.querySelectorAll('[data-subscription-product-qty-btn]').forEach((element) => {
            element.addEventListener('click', () => {
                this._onProductVariantChange();
                let dataSubscriptionProductQtyValue = this.selectors.dataSubscriptionProductQty.value;

                if (dataSubscriptionProductQtyValue == 1) {
                    this.selectors.btnSubscriptionQtyMinus.classList.add('btn-disabled');
                } else {
                    this.selectors.btnSubscriptionQtyMinus.classList.remove('btn-disabled');
                }

                if (productCurrentVariant.id == currentSubscription.external_variant_id.ecommerce && dataSubscriptionProductQtyValue == currentSubscription.quantity) {
                    this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.add("d-none"); });
                    this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.add("d-none"); });
                } else {
                    this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.remove("d-none"); });
                    this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.remove("d-none"); });
                }
            });
        });



        // Change Delivery Frequency
        this.selectors.btnUpdateFrequency.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this._changeDeliveryFrequency(event);
            });
        });
        // Change Delivery Frequency On Change
        document.querySelectorAll('[data-delivery-frequency]').forEach((element) => {
            element.addEventListener('click', () => {
                let orderIntervalFrequency = element.getAttribute('data-order-interval-frequency');
                if (orderIntervalFrequency == currentSubscription.order_interval_frequency) {
                    this.selectors.btnUpdateFrequency.forEach((element) => { element.classList.add("d-none"); });
                    this.selectors.btnUpdateFrequencyCancel.forEach((element) => { element.classList.add("d-none"); });
                } else {
                    this.selectors.btnUpdateFrequency.forEach((element) => { element.classList.remove("d-none"); });
                    this.selectors.btnUpdateFrequencyCancel.forEach((element) => { element.classList.remove("d-none"); });
                }
            });
        });

        // Skip Next Order Date
        this.selectors.btnSkipNextOrder.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                var nextOrderDate = this.selectors.dataUpcomingNextOrderDate.getAttribute('data-upcoming-next-order-date');                
                this._changeNextOrderDate(event, 'skip-next-order', nextOrderDate);
            });
        });
        // Change Next Order Date
        this.selectors.btnChangeNextOrder.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                var nextOrderDate = this.selectors.dataChangeNextOrderDate.value;
                this._changeNextOrderDate(event, 'chnage-next-order', nextOrderDate);
            });
        });
        // Skip Next Order And Change Next Order Div
        this.selectors.divSkipNextOrder.addEventListener('click', (event) => {
            event.preventDefault();
            this.selectors.divSkipNextOrder.classList.add("select");
            this.selectors.divChangeNextOrder.classList.remove("select");
            this.selectors.divSkipNextOrderDetails.classList.remove("d-none");
            this.selectors.btnSkipNextOrder.forEach((element) => { element.classList.remove("d-none"); });
            this.selectors.idChangeNextOrderDate.flatpickr().clear();
            this.selectors.divChangeNextOrderDetails.classList.add('d-none');
            this.selectors.btnChangeNextOrder.forEach((element) => {
                element.classList.add("d-none");
                element.classList.add("btn-disabled");
            });
            this.selectors.btnSkipChangeCancel.forEach((element) => { element.classList.remove("d-none"); });
        });
        this.selectors.divChangeNextOrder.addEventListener('click', (event) => {
            event.preventDefault();
            this.selectors.divChangeNextOrder.classList.add("select");
            this.selectors.divSkipNextOrder.classList.remove("select");
            this.selectors.divChangeNextOrderDetails.classList.remove("d-none");
            this.selectors.btnChangeNextOrder.forEach((element) => { element.classList.remove("d-none"); });
            if (!this.selectors.divSkipNextOrderDetails.classList.contains('d-none')) {
                this.selectors.btnSkipChangeCancel.forEach((element) => { element.classList.add("d-none"); });
            }
            this.selectors.divSkipNextOrderDetails.classList.add('d-none');
            this.selectors.btnSkipNextOrder.forEach((element) => { element.classList.add("d-none"); });

            // var datepicker = document.getElementById('flatpickr');
            let _this = this;
            let today = new Date();
            let dateValues = {
                altInput: true,
                altFormat: "F d, Y",
                dateFormat: "Y-m-d",
                disableMobile: true,
                minDate: "today",
                disable: [today],
                onChange: function(e) {
                    let nextOrderDateValue = _this.selectors.dataChangeNextOrderDate.value;
                    if (currentSubscription.next_charge_scheduled_at == nextOrderDateValue) {
                        _this.selectors.btnChangeNextOrder.forEach((element) => { element.classList.add("btn-disabled"); });
                        _this.selectors.btnSkipChangeCancel.forEach((element) => { element.classList.add("d-none"); });
                    } else {
                        _this.selectors.btnChangeNextOrder.forEach((element) => { element.classList.remove("btn-disabled"); });
                        _this.selectors.btnSkipChangeCancel.forEach((element) => { element.classList.remove("d-none"); });
                    }
                }
            }
            flatpickr(this.selectors.idChangeNextOrderDate, dateValues);
        });

        // Keep Subscription
        this.selectors.btnKeepSubscription.addEventListener('click', (event) => {
            event.preventDefault();
            if(upcomingCharge != null){
                this._keepSubscription(event);
            }
        });
        // Cancle Subscription
        this.selectors.linkCancleSubscription.addEventListener('click', (event) => {
            event.preventDefault();
            this._cancelSubscription(event);
        });
        // Cancel Subscription Reason Dropdown
        this.selectors.selectCancelSubscriptionReason.addEventListener('change', (event) => {
            if (this.selectors.selectCancelSubscriptionReason.value != 'null') {
                this.selectors.btnCancelMySubscription.forEach((element) => { element.classList.remove("d-none"); });
            } else { this.selectors.btnCancelMySubscription.forEach((element) => { element.classList.add("d-none"); }); }
        });

        if(window.innerWidth < 1024){
            document.querySelectorAll('.collection__list-item').forEach((element) => {
                element.addEventListener('touchstart', (event) => {
                    event.preventDefault();
                    event.currentTarget.querySelector('[data-add-addon-product-btn]').click();                
                });
            });
        }


        // Add Product From Addon Modal
        this.selectors.btnAddAddonProduct.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();                
                addonProductJSON = "";
                producVariantsArray = [];
                addonProductDataJSON = "";
                addonProductDefaultVariant = "";

                this.selectors.dataAddAddonProductQty.value = "1";
                this.selectors.btnAddonQtyMinus.classList.add('btn-disabled');
                this.selectors.inputAddonOnetime.checked = true;
                // this.selectors.dataAddonSubscriptionFrequency.value = "1";
                this.selectors.divAddonSubscriptionFrequencys.classList.add('d-none');
                this.selectors.btnAddOnetimeProduct.classList.remove('d-none');
                this.selectors.btnAddSubscriptionProduct.classList.add('d-none');
                document.querySelector('[data-onetime-div]').classList.remove('d-none');

                addonProductDataJSON = JSON.parse(event.currentTarget.closest('[data-product-div]').querySelector('[data-addonProductJSON]').textContent);
                addonProductJSON = addonProductDataJSON.product;
                producVariantsArray = addonProductDataJSON.product.variants;
                addonProductDefaultVariant = addonProductDataJSON.product_default_variant;

                this.selectors.dataAddAddonProductImg.src = addonProductJSON.featured_image == null ? window.globalVariables.no_image_replacement : addonProductJSON.featured_image;
                this.selectors.dataAddAddonProductTitle.innerHTML = addonProductJSON.title;

                if (addonProductJSON.requires_selling_plan == true) {
                    document.querySelector('[data-onetime-div]').classList.add('d-none');
                    document.querySelector('[data-addon-subscription-input]').checked = true;
                    this.selectors.divAddonSubscriptionFrequencys.classList.remove('d-none');
                    this.selectors.btnAddOnetimeProduct.classList.add('d-none');
                    this.selectors.btnAddSubscriptionProduct.classList.remove('d-none');
                }

                var sellingOptionHTML = "";
                var selling_plan_index = 0;
                selling_plan_discount = 0;
                addonProductJSON.selling_plan_groups.forEach((plan_groups) => {
                    plan_groups.selling_plans.forEach((selling_plan) => {
                        if(selling_plan.name.includes("Month")) {
                            selling_plan_index = selling_plan_index + 1;
                            sellingOptionHTML += `<option value="${selling_plan_index}">${selling_plan.name}</option>`;
                            if(selling_plan_index == 1){ selling_plan_discount = selling_plan.price_adjustments[0].value; }
                        }
                    });
                });
                if( sellingOptionHTML != "") { 
                    this.selectors.divSubscription.classList.remove('d-none');
                    this.selectors.dataAddonSubscriptionFrequency.innerHTML = sellingOptionHTML;
                } else { this.selectors.divSubscription.classList.add('d-none'); }

                if( selling_plan_discount != 0 ) { this.selectors.dataAddonSubscriptionDiscount.innerHTML = `Subscribe & Save ${selling_plan_discount}%`;
                } else { this.selectors.dataAddonSubscriptionDiscount.innerHTML = `Subscribe`; }

                this.selectors.dataAddonOnetimePrice.forEach((element) => {
                    element.innerHTML = Shopify.formatMoney(producVariantsArray[0].price, window.globalVariables.money_format);
                    element.setAttribute('data-addon-onetime-price', Shopify.formatMoney(producVariantsArray[0].price, window.globalVariables.money_format))
                });
                this.selectors.dataAddonSubscriptionPrice.forEach((element) => {
                    element.innerHTML = Shopify.formatMoney((producVariantsArray[0].price - (producVariantsArray[0].price * (selling_plan_discount / 100))), window.globalVariables.money_format);
                    element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((producVariantsArray[0].price - (producVariantsArray[0].price * (selling_plan_discount / 100))), window.globalVariables.money_format));
                });

                var optionFlag = false;
                var productOptionsHTML = "";
                for (const option of addonProductDataJSON.options_with_values) {
                    var optionsHTML = "";
                    if (option.name != 'Title') {
                        for (const value of option.values) { 
                          if(value.includes('% off)') == false){
                            optionsHTML += `<option value="${value}">${value}</option>`; 
                          }
                        }
                        productOptionsHTML += `<div class="d-flex align-items-center mb-4 pb-md-0 pb-1">
                                                <p class="font-size-md fw-medium mb-0 pe-3 w-auto">${option.name}:</p>
                                                <select aria-label="${option.name}" id="${option.name}" class="form-control" data-addon-product-variant-select>${optionsHTML}</select>
                                            </div>`;
                        this.selectors.divAddAddonProductVariants.setAttribute('style', 'display: block !important;');
                        optionFlag = true;
                    }
                    if (optionFlag == false) { this.selectors.divAddAddonProductVariants.setAttribute('style', 'display: none !important;'); }
                }
                this.selectors.divAddAddonProductVariants.innerHTML = productOptionsHTML;

                // Check Current Variant Availability
                this._getAddonCurrentVariant();
                if (addonCurrentVariant) {
                    if (!addonCurrentVariant.available) {
                        this.selectors.btnAddOnetimeProduct.classList.add('btn-disabled');
                        this.selectors.btnAddSubscriptionProduct.classList.add('btn-disabled');
                    } else {
                        this.selectors.btnAddOnetimeProduct.classList.remove('btn-disabled');
                        this.selectors.btnAddSubscriptionProduct.classList.remove('btn-disabled');
                    }
                }

                this.selectors.modalAddonProducts.classList.add("d-none");
                this.selectors.modalDialog.classList.remove("modal-dialog-full");
                this.selectors.modalAddMySubscription.classList.remove("d-none");

                // Get Addon Product Current Variant On Select
                document.querySelectorAll('[data-addon-product-variant-select]').forEach((element) => {
                    element.addEventListener('change', () => {
                        this._onAddonProductVariantChange();
                    });
                });
            });
        });
        
        // Add Addon As Onetime Product
        this.selectors.btnAddOnetimeProduct.addEventListener('click', (event) => {
            event.preventDefault();
            this._addAddonProduct(event);
        });
        // Add Addon As Subscription Product
        this.selectors.btnAddSubscriptionProduct.addEventListener('click', (event) => {
            event.preventDefault();
            this._addAddonProduct(event);
        });

        // Close Modal
        this.selectors.modalClose.forEach((element) => {
            element.addEventListener('click', () => { this._closeModal(element) });
        });

        // Back Button
        this.selectors.modalBack.forEach((element) => {
            element.addEventListener('click', () => { this._backModal(element) });
        });
        this.selectors.modalBackCancle.addEventListener('click', () => {
            this.selectors.modalBeforeYouGo.classList.add("d-none");
            this.selectors.modalCancelSubscription.classList.remove("d-none");
        });
        this.selectors.modalBackAddon.addEventListener('click', () => {
            this.selectors.modalAddMySubscription.classList.add("d-none");
            this.selectors.modalDialog.classList.add("modal-dialog-full");
            this.selectors.modalAddonProducts.classList.remove("d-none");
        });

    }

    // All Dynamic Events
    _domEventListener = () => {
        const _this = this;

        document.addEventListener('click', function(event) {
            event.stopImmediatePropagation();

            // Get Subscription ID
            if (event.target.hasAttribute('data-subscription-id')) { subscriptionID = event.target.getAttribute('data-subscription-id'); }

            // Open Box 
            if (event.target.hasAttribute('data-modal-btn')) {
                document.body.style.overflowY = "hidden";
                document.body.classList.add("remove-scroll");
                _this.selectors.modalCommonBox.classList.add("open");
                _this.selectors.modalContent.forEach((modal) => { modal.classList.add('d-none'); }); // Close All Modals                
            }

            // Open Modals 
            if (event.target.hasAttribute('data-manage-btn')) {
                _this.selectors.modalManageSubscription.classList.remove("d-none");
                let subId = event.target.getAttribute('data-subscription-id');                
                _this._getUpcomingCharge(subId);
            }
            if (event.target.closest('.change-product-size-div')) {
                _this.selectors.modalChangeProductSize.classList.remove("d-none");
                _this.selectors.modalManageSubscription.classList.add("d-none");
                _this._showCurrentSubscription('change-product-size', subscriptionID);
            }
            if (event.target.closest('.change-delivery-frequency-div')) {
                _this.selectors.modalChangeDeliveryFrequency.classList.remove("d-none");
                _this.selectors.modalManageSubscription.classList.add("d-none");
                _this._showCurrentSubscription('change-delivery-frequency', subscriptionID);
            }
            if (event.target.closest('.skip-change-order-date-div')) {
                _this.selectors.modalSkipChangeOrderDate.classList.remove("d-none");
                _this.selectors.modalManageSubscription.classList.add("d-none");
                _this._showCurrentSubscription('skip-change-order-date', subscriptionID);
            }
            if (event.target.hasAttribute('data-cancle-subscription-btn')) {
                _this.selectors.modalCancelSubscription.classList.remove("d-none");
            }
            if (event.target.hasAttribute('data-cancle-my-subscription-btn')) {
                _this.selectors.modalBeforeYouGo.classList.remove("d-none");
            }
            if (event.target.hasAttribute('data-add-more-products-btn')) {
                document.querySelector('#searchAddonProduct').value = "";
                document.querySelector('[data-search-hidden]').classList.remove("field--filled");
                document.querySelector('[data-product-list-div]').classList.remove("productList");
                document.querySelector('[data-predictive-search-product-list-div]').classList.add("d-none");

                addressID = "";
                addressID = event.target.getAttribute('data-address-id');
                addressUpcomingChargeDate = "";
                addressUpcomingChargeDate = event.target.getAttribute('data-upcoming-charge-date');
                addressUpcomingSubscriptionID = "";
                addressUpcomingSubscriptionID = event.target.getAttribute('data-upcoming-subscription-id');
                _this.selectors.modalDialog.classList.add("modal-dialog-full");
                _this.selectors.modalAddonProducts.classList.remove("d-none");
            }

            // Show Buttons
            if (event.target.hasAttribute('data-addon-qty-btn')) {
                if (_this.selectors.dataAddAddonProductQty.value == 1) {
                    _this.selectors.btnAddonQtyMinus.classList.add('btn-disabled');
                } else {
                    _this.selectors.btnAddonQtyMinus.classList.remove('btn-disabled');
                }
                _this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.remove("d-none"); });
                _this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.remove("d-none"); });
            }
            if (event.target.hasAttribute('data-product-qty-btn')) {
                if (document.querySelector('[data-product-qty]').value == 1) {
                    document.querySelector('[data-product-qty-minus-btn]').classList.add('btn-disabled');
                } else {
                    document.querySelector('[data-product-qty-minus-btn]').classList.remove('btn-disabled');
                }
                _this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.remove("d-none"); });
                _this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.remove("d-none"); });
            }
            if (event.target.hasAttribute('data-addon-onetime-input')) {
                _this.selectors.divAddonSubscriptionFrequencys.classList.add('d-none');
                _this.selectors.btnAddOnetimeProduct.classList.remove('d-none');
                _this.selectors.btnAddSubscriptionProduct.classList.add('d-none');
            }
            if (event.target.hasAttribute('data-addon-subscription-input')) {
                _this.selectors.dataAddonSubscriptionFrequency.value = "1";
                _this.selectors.divAddonSubscriptionFrequencys.classList.remove('d-none');
                _this.selectors.btnAddOnetimeProduct.classList.add('d-none');
                _this.selectors.btnAddSubscriptionProduct.classList.remove('d-none');
            }

            if (event.target.hasAttribute('data-close-drawer')) {
                siteOverlay.prototype.hideOverlay();
                document.querySelector('[data-apply-reward-drawer]').classList.remove("opened-drawer");
                // document.querySelector('[data-apply-reward-drawer]').classList.add("d-none");
            }
        }, false);
    }

    // Get Customer Details
    _getCustomerDetails() {
        const _this = this;
        var config = {
            url: `/customers?email=${window.globalVariables.customer_email}`,
            method: 'GET',
            data: []
        };
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(config),
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (data.customers.length > 0) {
                customerDetails = data.customers[0];
                _this._getCustomerAddresses();
            } else {
                if (!_this.selectors.divSpinner.classList.contains('d-none')) { _this.selectors.divSpinner.classList.add('d-none'); }
                _this.selectors.divSubsciptionsList.innerHTML = '<h3 class="fw-bold ls-0 mb-4 text-capitalize ls-n1">Your Subscriptions</h3><div class="subscription-order-table mb-md-6 mb-4">You have no subscription order.</div>';

                // if (window.location.href.includes('handle')) {
                //     document.querySelector('[data-next-charge-select-div]').classList.add("d-none");
                //     document.querySelector('[data-address-list-select-div]').classList.add("d-none");
                //     document.querySelector('[data-add-product-btn]').classList.add("d-none");
                //     document.querySelector('[data-add-checkout-btn]').classList.remove("d-none");
                //     document.querySelector('[data-delivery-select-div]').classList.add("d-none");
                //     document.querySelector('[data-product-selling-plans-div]').classList.remove("d-none");

                //     _this.selectors.modalCommonBox.classList.add("open");
                //     _this.selectors.modalAddCurrentSubscription.classList.remove("d-none");

                //     document.querySelectorAll('[data-product-qty-btn]').forEach((element) => {
                //         element.addEventListener('click', () => {
                //             if (document.querySelector('[data-product-qty]').value == 1) {
                //                 document.querySelector('[data-product-qty-minus-btn]').classList.add('btn-disabled');
                //             } else {
                //                 document.querySelector('[data-product-qty-minus-btn]').classList.remove('btn-disabled');
                //             }
                //         });
                //     });
                // }
            }
        }).catch(function(err) {
            console.log('Something went wrong.', err);
        });
    }

    // Get Customer Addresses
    _getCustomerAddresses() {
        const _this = this;
        var config = {
            url: `/addresses?customer_id=${customerDetails.id}`,
            method: 'GET',
            data: []
        };
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (data.addresses.length > 0) {
                addressesJson = data;
                _this._getSubscriptionProducts();
            }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Get Subscription Products
    async _getSubscriptionProducts() {
        const _this = this;
        let productsArr = [];
        var config = {
            url: `/subscriptions?customer_id=${customerDetails.id}`,
            method: 'GET',
            data: []
        };
        await fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (data.subscriptions.length > 0) {
                allSubscrptionsJson = data.subscriptions;
                for (let order of allSubscrptionsJson) {
                    productsArr.push(order.external_product_id.ecommerce);
                }
                productsIds = productsArr.toString();
                _this._getOnetimeProducts(customerDetails.id);
            } else {
                if (!_this.selectors.divSpinner.classList.contains('d-none')) { _this.selectors.divSpinner.classList.add('d-none'); }
                _this.selectors.divSubsciptionsList.innerHTML = '<h3 class="fw-bold ls-0 mb-4 text-capitalize ls-n1">Your Subscriptions</h3><div class="subscription-order-table mb-md-6 mb-4">You have no subscription order.</div>';

                if (window.location.href.includes('handle')) {
                    document.body.style.overflowY = "hidden";
                    document.body.classList.add("remove-scroll");
                    document.querySelector('[data-add-modal-btn]').innerHTML = "Add To Cart";
                    document.querySelector('[data-next-charge-select-div]').classList.add("d-none");
                    document.querySelector('[data-address-list-select-div]').classList.add("d-none");
                    document.querySelector('[data-add-product-btn]').classList.add("d-none");
                    document.querySelector('[data-add-checkout-btn]').classList.remove("d-none");
                    document.querySelector('[data-delivery-select-div]').classList.add("d-none");
                    document.querySelector('[data-product-selling-plans-div]').classList.remove("d-none");

                    _this.selectors.modalCommonBox.classList.add("open");
                    _this.selectors.modalAddCurrentSubscription.classList.remove("d-none");

                    document.querySelector('[data-add-checkout-btn]').addEventListener('click', () => {
                        window.history.pushState({}, document.title, "/" + "account");
                    });
                    document.querySelectorAll('[data-product-qty-btn]').forEach((element) => {
                        element.addEventListener('click', () => {
                            if (document.querySelector('[data-product-qty]').value == 1) {
                                document.querySelector('[data-product-qty-minus-btn]').classList.add('btn-disabled');
                            } else {
                                document.querySelector('[data-product-qty-minus-btn]').classList.remove('btn-disabled');
                            }
                        });
                    });
                }
            }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Get Onetime Products
    async _getOnetimeProducts(customerID) {
        const config = {
            url: `/onetimes?customer_id=${customerID}`,
            method: 'GET',
            data: []
        }
        fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: this.header,
                body: JSON.stringify(config),
            })
            .then(response => response.json())
            .then(data => {
                oneTimeJson = data.onetimes;
                this._getProductsJson();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // Get Product JSON
    _getProductsHandleJson(productHandle) {
        const _this = this;
        fetch(`/products/${productHandle}?view=json`, {
            method: 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            if (data) {
                addonProductJSON = "";
                producVariantsArray = [];
                addonProductDataJSON = "";
                addonProductDefaultVariant = "";

                document.querySelector('[data-product-qty-minus-btn]').classList.add('btn-disabled');

                addonProductDataJSON = data;
                addonProductJSON = addonProductDataJSON.product;
                producVariantsArray = addonProductDataJSON.product.variants;
                addonProductDefaultVariant = addonProductDataJSON.product_default_variant;

                document.querySelector('[data-product-img]').src = addonProductJSON.featured_image == null ? window.globalVariables.no_image_replacement : addonProductJSON.featured_image;
                document.querySelector('[data-product-title]').innerHTML = addonProductJSON.title;
                document.querySelector('[data-product-variant-id]').value = addonProductDefaultVariant.id;
                // document.querySelector('[data-back-product-page]').setAttribute("href", `/products/${addonProductJSON.id}`);

                var deliveryOptionHTML = "";
                var sellingOptionHTML = "";
                var selling_plan_index = 0;
                productSellingPlanDiscount = 0;
                addonProductJSON.selling_plan_groups.forEach((plan_groups) => {
                    plan_groups.selling_plans.forEach((selling_plan) => {
                        if(selling_plan.name.includes("Month")) {
                            selling_plan_index = selling_plan_index + 1;
                            sellingOptionHTML += `<option value="${selling_plan.id}">${selling_plan.name}</option>`;
                            deliveryOptionHTML += `<option value="${selling_plan_index}">${selling_plan.name}</option>`;
                            if(selling_plan_index == 1){ productSellingPlanDiscount = selling_plan.price_adjustments[0].value; }
                        }
                    });
                });

                if( deliveryOptionHTML != "") { document.querySelector('[data-delivery-select]').innerHTML = deliveryOptionHTML; } 
                if( sellingOptionHTML != "") { document.querySelector('[data-product-selling-plans]').innerHTML = sellingOptionHTML; } 
                if( sellingOptionHTML == "" && deliveryOptionHTML == "") { document.querySelector('[data-product-subscription-div]').classList.add('d-none'); }
                
                if( productSellingPlanDiscount != 0 ) { document.querySelector('[data-product-subscription-discount]').innerHTML = `Subscribe & Save ${productSellingPlanDiscount}%`;
                } else { document.querySelector('[data-product-subscription-discount]').innerHTML = `Subscribe`; }

                document.querySelectorAll('[data-product-subscription-price]').forEach((element) => {
                    element.innerHTML = Shopify.formatMoney((producVariantsArray[0].price - (producVariantsArray[0].price * (productSellingPlanDiscount / 100))), window.globalVariables.money_format);
                    element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((producVariantsArray[0].price - (producVariantsArray[0].price * (productSellingPlanDiscount / 100))), window.globalVariables.money_format));
                });

                var optionFlag = false;
                var productOptionsHTML = "";
                for (const option of addonProductDataJSON.options_with_values) {
                    var optionsHTML = "";
                    if (option.name != 'Title') {
                        for (const value of option.values) { 
                          if(value.includes('% off)') == false){
                            optionsHTML += `<option value="${value}">${value}</option>`; 
                          }
                        }
                        productOptionsHTML += `<div class="d-flex align-items-center mb-md-4 mb-3 pb-2">
                                                    <p class="font-size-md fw-medium mb-0 pe-lg-5 pe-3 w-auto">${option.name}:</p>
                                                    <select aria-label="${option.name}" id="${option.name}" class="form-control" data-product-variant-select> ${optionsHTML}</select>
                                                </div>`;
                        document.querySelector('[data-product-variants-div]').setAttribute('style', 'display: block !important;');
                        optionFlag = true;
                    }
                    if (optionFlag == false) { document.querySelector('[data-product-variants-div]').setAttribute('style', 'display: none !important;'); }
                }
                document.querySelector('[data-product-variants-div]').innerHTML = productOptionsHTML;

                // Get Product Current Variant On Select
                document.querySelectorAll('[data-product-variant-select]').forEach((element) => {
                    element.addEventListener('change', () => {
                        _this._onAddonProductVariantChange();
                    });
                });
            }
        }).catch(function(error) {
            console.error('Request failed', error)
            document.querySelector('[data-close-modal]').click();
            alert('Something went wrong.');
        });


    }

    // Get Product JSON
    _getProductsJson() {
        const _this = this;
        var config = {
            url: `/products.json`,
            method: 'get',
            data: { ids: productsIds }
        };
        var sHeader = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        fetch('/tools/ha-api/shopify/common', {
            method: 'POST',
            headers: sHeader,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            productsJson = data.products;
            let obj = {};
            productsJson.map((item, i) => {
                obj[item.id] = item;
            });
            productsJson = obj;

            if (allSubscrptionsJson.length > 0) {
                _this._createSubscriptionListing('normal', allSubscrptionsJson);

                if (window.location.href.includes('handle')) {
                    // if (customerDetails.subscriptions_active_count > 0) {
                    if (allAddresseArray.length > 0) {
                        var addressHTML = "";
                        var nextChargeHTML = "";
                        allAddresseArray.forEach(function(address, i) {
                            if (i == 0) { nextChargeHTML = `<option value="${address.next_charge_date}" >${address.next_charge_date}</option>`; }
                            addressHTML += `<option value="${address.address_id}" data-next-charge-date="${address.next_charge_date}">${address.address_text}</option>`;
                        });
                        // addressHTML += `<option value="new">New</option>`;
                        document.body.style.overflowY = "hidden";
                        document.body.classList.add("remove-scroll");
                        document.querySelector('[data-add-product-btn]').classList.remove("d-none");
                        document.querySelector('[data-add-checkout-btn]').classList.add("d-none");
                        document.querySelector('[data-next-charge-select]').innerHTML = nextChargeHTML;
                        document.querySelector('[data-address-list-select]').innerHTML = addressHTML;
                        document.querySelector('[data-next-charge-select-div]').classList.remove("d-none");
                        document.querySelector('[data-address-list-select-div]').classList.remove("d-none");
                        document.querySelector('[data-delivery-select-div]').classList.remove("d-none");
                        document.querySelector('[data-product-selling-plans-div]').classList.add("d-none");
                        

                        // Get Next charge date on change
                        document.querySelectorAll('[data-address-list-select]').forEach((element) => {
                            element.addEventListener('change', (event) => {
                                // if (event.target.value == 'new') {
                                //     // window.location.href = '/checkout';
                                //     window.location.href = 'https://www.barefaced.com/cart/39899900772514:2?checkout';
                                // } else {
                                var nextChargeDate = event.target.options[event.target.selectedIndex].getAttribute('data-next-charge-date');
                                document.querySelector('[data-next-charge-select]').innerHTML = `<option value="${nextChargeDate}" >${nextChargeDate}</option>`;
                                // }
                            });
                        });
                    } else {
                        document.querySelector('[data-next-charge-select-div]').classList.add("d-none");
                        document.querySelector('[data-address-list-select-div]').classList.add("d-none");
                        document.querySelector('[data-add-product-btn]').classList.add("d-none");
                        document.querySelector('[data-add-checkout-btn]').classList.remove("d-none");
                        document.querySelector('[data-delivery-select-div]').classList.add("d-none");
                        document.querySelector('[data-product-selling-plans-div]').classList.remove("d-none");
                    }
                    _this.selectors.modalCommonBox.classList.add("open");
                    _this.selectors.modalAddCurrentSubscription.classList.remove("d-none");

                    // Add Product As Subscription Product
                    document.querySelector('[data-add-product-btn]').addEventListener('click', (event) => {
                        event.preventDefault();
                        _this._addProduct(event);
                    });
                }

                _this._getPayment();

                // Edit Shipping Address Link
                document.querySelectorAll('[data-edit-shipping-address-link]').forEach((element) => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (event.target.hasAttribute('data-shipping-address-id')) {
                            var addressID = event.target.getAttribute('data-shipping-address-id');
                            _this._getShippingAddress(addressID)
                                // _this._showCurrentSubscription('edit-shipping-address', addressID);
                        }
                    });
                });

                // Manage Subscription Event
                document.querySelectorAll('[data-manage-btn]').forEach(element => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        for (const subscription of allSubscrptionsJson) {
                            var subscriptionID = event.target.getAttribute('data-subscription-id');
                            if (subscriptionID == subscription.id) {
                                currentSubscription = subscription;
                            }
                        }
                    })
                });

                // Reactivate Subscription Event
                document.querySelectorAll('[data-reactivate-btn]').forEach((element) => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        _this._reactivateSubscription(event);
                    });
                });

                // Remove Onetime Product
                document.querySelectorAll('[data-remove-onetime-product-btn]').forEach((element) => {
                    element.addEventListener('click', (event) => {
                        // event.preventDefault();
                        const currentTarget = event.currentTarget;
                        onetimeID = "";
                        onetimeID = currentTarget.getAttribute('data-onetime-id');
                        currentTarget.classList.add("loading");

                        removeOnetimeID = [];
                        removeOnetimeID.push(onetimeID);
                        _this._removeAddonProduct(removeOnetimeID);
                        currentTarget.classList.add("loading");
                    });
                });
            }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Get Payment Details
    async _getPayment() {
        const _this = this;
        const config = {
            // url: `/payment_methods/${paymentMethodID}`,
            url: `/customers/${customerDetails.id}/payment_sources`,
            method: 'GET',
            headers: { "X-Recharge-Version": "2021-01" },
            data: [],
        };
        fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: this.header,
                body: JSON.stringify(config),
            })
            .then(response => {
                return response.json(); // The API call was successful!
            })
            .then(data => {
                if (data.payment_sources[0].card_brand != null) {
                    document.querySelectorAll('[data-visa]').forEach((element) => { element.innerHTML = data.payment_sources[0].card_brand.replace('_', ' '); });
                    document.querySelectorAll('[data-4digit]').forEach((element) => { element.innerHTML = data.payment_sources[0].card_last4; });

                    document.querySelector('[data-card-brand]').innerHTML = data.payment_sources[0].card_brand.replace('_', ' ');
                    document.querySelector('[data-card-4digit]').innerHTML = data.payment_sources[0].card_last4;
                    document.querySelector('[data-card-exp-details]').innerHTML = 'Expires ' + data.payment_sources[0].card_exp_month + ' / ' + data.payment_sources[0].card_exp_year;
                }
                if (data.payment_sources[0].billing_address != null) {
                    var billing_address_text = data.payment_sources[0].billing_address.address1 != null ? data.payment_sources[0].billing_address.address1 : data.payment_sources[0].billing_address.address2;
                    document.querySelector('[data-billing-name]').innerHTML = data.payment_sources[0].billing_address.first_name + ' ' + data.payment_sources[0].billing_address.last_name;
                    document.querySelector('[data-billing-address1]').innerHTML = billing_address_text;
                    document.querySelector('[data-billing-province]').innerHTML = data.payment_sources[0].billing_address.province;
                    document.querySelector('[data-billing-countryName]').innerHTML = data.payment_sources[0].billing_address.country;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // Get Charge Discount Data
    _getDiscountData(rewardDiscountID) {
        const config = {
            url: `/discounts/${rewardDiscountID}`,
            method: 'GET',
        };
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (data.discount.code) {
                document.querySelector('[data-reward-discount-code-value]').innerHTML = data.discount.code;
                document.querySelector('[data-reward-discount-code-value]').setAttribute('data-reward-discount-code-value', data.discount.code)

                // document.querySelector('[data-apply-reward-drawer]').classList.remove("d-none");
                document.querySelector('[data-apply-reward-drawer]').classList.add("opened-drawer");
                siteOverlay.prototype.showOverlay();
                document.querySelector('[data-discount-heading]').innerHTML = "Remove discount";
                if (document.querySelector('[data-applied-div]')) {
                    document.querySelector('[data-applied-div]').classList.remove("d-none");
                }
                document.querySelector('[data-apply-div]').classList.add("d-none");
            }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Create Subscription Listing
    _createSubscriptionListing(eventType, allSubscrptions) {
        const _this = this;
        var allHTML = "";
        var addresseHTML = "";
        var headingHTML = '<h3 class="fw-bold mb-3 pb-1 text-capitalize ls-n2">Your Subscriptions</h3>';

        addresseArray = [];
        allAddresseArray = [];
        for (const address of addressesJson.addresses) {
            var allActiveSubscripitonHTML = "";
            var allCancelSubscripitonHTML = "";
            var allExpiredSubscripitonHTML = "";
            var allOnetimeProductsHTML = ""
            var nextChargeDateArray = [];
            var upcomingChargeDate = "";
            var addonUpcomingSubscriptionID = "";
            var btnDisplayClass = "d-none";
            var addressDisplayClass = "";
            var rewardDetails = "";
            var address_text = "";

            if (address.discounts.length > 0) {
                rewardDetails = `<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-asterix">
                                    <path d="M2.91726 1.26327L3.27467 0.188896C3.35956 -0.0663704 3.71784 -0.061735 3.79633 0.195609L4.12665 1.27885C4.17932 1.45164 4.37872 1.52804 4.53128 1.43382L5.48742 0.843285C5.71453 0.703024 5.9861 0.939589 5.88273 1.18774L5.4477 2.23246C5.37829 2.3991 5.48252 2.58739 5.65925 2.6144L6.76677 2.78407C7.02989 2.82435 7.08762 3.18224 6.8508 3.30516L5.85415 3.82248C5.6951 3.90504 5.65546 4.11699 5.7736 4.25269L6.51424 5.10313C6.69018 5.30517 6.50713 5.61686 6.24772 5.55699L5.15568 5.30485C4.98147 5.26465 4.81635 5.40123 4.82078 5.58201L4.84802 6.71528C4.8545 6.98454 4.51628 7.10418 4.35558 6.88951L3.67914 5.98593C3.57119 5.84175 3.35806 5.83903 3.24656 5.98033L2.54754 6.86625C2.38147 7.07668 2.04641 6.94833 2.05967 6.6794L2.11535 5.54716C2.12427 5.36654 1.9627 5.22572 1.78747 5.26145L0.689429 5.48539C0.428599 5.53861 0.25337 5.22229 0.434364 5.0248L1.19616 4.19371C1.3177 4.06112 1.28334 3.84814 1.12644 3.76158L0.143052 3.21884C-0.0905338 3.08993 -0.0238851 2.73364 0.240182 2.70008L1.35157 2.55902C1.52885 2.53648 1.63783 2.35098 1.57268 2.18259L1.1641 1.12708C1.06705 0.876372 1.34439 0.64684 1.56794 0.792855L2.50892 1.40776C2.65896 1.50591 2.86025 1.4347 2.91726 1.26327Z" fill="#EB9575"/>
                                </svg>
                                <sapn class="ps-1" data-reward-applied-link data-discount-id="${address.discounts[0].id}" data-reward-address-id="${address.id}" data-reward-address="${address.address1 != null ? address.address1 : address.address2} ${address.city}, ${address.province} ${address.zip}">My Rewards</sapn>`;
            } else {
                rewardDetails = `<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-asterix">
                                    <path d="M2.91726 1.26327L3.27467 0.188896C3.35956 -0.0663704 3.71784 -0.061735 3.79633 0.195609L4.12665 1.27885C4.17932 1.45164 4.37872 1.52804 4.53128 1.43382L5.48742 0.843285C5.71453 0.703024 5.9861 0.939589 5.88273 1.18774L5.4477 2.23246C5.37829 2.3991 5.48252 2.58739 5.65925 2.6144L6.76677 2.78407C7.02989 2.82435 7.08762 3.18224 6.8508 3.30516L5.85415 3.82248C5.6951 3.90504 5.65546 4.11699 5.7736 4.25269L6.51424 5.10313C6.69018 5.30517 6.50713 5.61686 6.24772 5.55699L5.15568 5.30485C4.98147 5.26465 4.81635 5.40123 4.82078 5.58201L4.84802 6.71528C4.8545 6.98454 4.51628 7.10418 4.35558 6.88951L3.67914 5.98593C3.57119 5.84175 3.35806 5.83903 3.24656 5.98033L2.54754 6.86625C2.38147 7.07668 2.04641 6.94833 2.05967 6.6794L2.11535 5.54716C2.12427 5.36654 1.9627 5.22572 1.78747 5.26145L0.689429 5.48539C0.428599 5.53861 0.25337 5.22229 0.434364 5.0248L1.19616 4.19371C1.3177 4.06112 1.28334 3.84814 1.12644 3.76158L0.143052 3.21884C-0.0905338 3.08993 -0.0238851 2.73364 0.240182 2.70008L1.35157 2.55902C1.52885 2.53648 1.63783 2.35098 1.57268 2.18259L1.1641 1.12708C1.06705 0.876372 1.34439 0.64684 1.56794 0.792855L2.50892 1.40776C2.65896 1.50591 2.86025 1.4347 2.91726 1.26327Z" fill="#EB9575"/>
                                </svg>
                                <sapn class="ps-1" data-apply-reward-link data-reward-address-id="${address.id}" data-reward-address="${address.address1 != null ? address.address1 : address.address2} ${address.city}, ${address.province} ${address.zip}">Apply My Rewards</sapn>`;
            }

            for (const onetime of oneTimeJson) {
                if (address.id == onetime.address_id) {
                    if (onetime.properties) {
                        var onetimeImage;
                        onetime.properties.forEach((prop) => { if (prop.name == `addon_img`) { onetimeImage = prop.value; } });
                    }

                    var onetimeProductsHTML = "";
                    onetimeProductsHTML = `<div class="border-bottom pt-4 pb-md-3 pb-4 px-2">
                                <div class="row align-items-md-center mx-0">
                                    <div class="col-md-4 col-12 mb-md-0 mb-2 px-0">
                                    <div class="d-flex align-items-center">
                                        <div class="order-image">
                                        <img src="${onetimeImage ? onetimeImage : window.globalVariables.no_image_replacement}"
                                            alt="Lavender-Rosemary Zum Bar Goat's Milk Soap" class="mw-100 me-3">
                                        <span class="badge fw-normal">One-time</span>
                                        </div>
                                        <div class="order-image-info pe-md-3">
                                        <!-- <p class="font-size-md fw-normal ls-sm text-primary mb-2">#233024670</p> -->
                                        <p class="fw-bold ls-0 mb-3 text-capitalize">${onetime.product_title.includes(";amp;") ? onetime.product_title.replace(";amp;", "") : onetime.product_title}</p>
                                        <p class="fw-normal mb-0">${onetime.variant_title == null ? "" : onetime.variant_title}</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-md-1 col-3 mb-md-0 px-0">
                                        <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Qty</div>
                                        <p class="fw-normal mb-0">${onetime.quantity}</p>
                                    </div>
                                    <div class="col-md-2 col-4 mb-md-0 ps-xl-3 px-0 text-md-start">
                                        <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Frequency</div>
                                        <p class="fw-normal mb-0">Once</p>
                                    </div>
                                    <div class="col-md-2 col-5 mb-md-0 ps-xl-3 px-0 text-md-start text-center">
                                        <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Next Order</div>
                                        <p class="fw-normal mb-0">${onetime.next_charge_scheduled_at == null ? "--" : this._formatDate(onetime.next_charge_scheduled_at, "month/date/year")}</p>
                                    </div>
                                    <div class="col-md-1 col-6 mb-md-0 ps-xl-4 px-0 mt-md-0 mt-4">
                                        <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Total</div>
                                        <p class="fw-normal mb-0">${Shopify.formatMoney((onetime.price * 100) * onetime.quantity, window.globalVariables.money_format)}</p>
                                    </div>
                                    <div class="re-active d-flex align-items-center justify-content-end col-md-2 col-6 px-0 px-lg-2 text-end mt-md-0 mt-4">
                                    <a href="javascript:void(0)" class="text-link fw-bold btn px-0 pt-0 pb-1" data-remove-addon-${onetime.id} data-onetime-id="${onetime.id}" data-remove-onetime-product-btn>
                                        <span class="add-text">Remove</span>
                                        <span class="spinner"></span>
                                    </a>
                                    </div>
                                </div>
                                </div>`;
                    allOnetimeProductsHTML += onetimeProductsHTML;
                }
            }

            for (const order of allSubscrptions) {
                if (address.id == order.address_id) {

                    var buttonHTML = "";
                    var reactiveClass = "";
                    var subscripitonHTML = "";

                    if (order.status == "active") {
                        btnDisplayClass = "d-block";
                        nextChargeDateArray.push(order.next_charge_scheduled_at);
                        buttonHTML = `<a href="#" class="btn btn-fill" data-product-title="${order.product_title}" data-product-id="${order.external_product_id.ecommerce}" data-subscription-id="${order.id}" data-modal-btn data-manage-btn>Manage</a>`
                    } else if (order.status == "cancelled") {
                        reactiveClass = "reactivate-order";
                        buttonHTML = `<a href="#" class="text-link fw-bold btn px-0 pt-0 pb-1" data-subscription-id="${order.id}" data-reactivate-btn>
                            <span class="add-text text-link__label">Reactivate</span>
                            <span class="spinner"></span>
                          </a>`
                    } else if (order.status == "expired") {
                        buttonHTML = `<span class="text-link__label">Expired</span>`
                    }

                    subscripitonHTML = `<div class="border-bottom pt-3 pb-md-3 pb-4 px-2 ${reactiveClass}">
                                <div class="row align-items-md-center mx-0">
                                  <div class="col-md-4 col-12 mb-md-0 mb-2 px-0">
                                    <div class="d-flex align-items-center">
                                      <div class="order-image">
                                      <img src="${productsJson[order.external_product_id.ecommerce].image == null ? window.globalVariables.no_image_replacement : productsJson[order.external_product_id.ecommerce].image.src}"
                                          alt="Lavender-Rosemary Zum Bar Goat's Milk Soap" class="mw-100 me-3">
                                      </div>
                                      <div class="order-image-info pe-md-3">
                                        <!-- <p class="font-size-md fw-normal ls-sm text-primary mb-2">#233024670</p> -->
                                        <p class="fw-bold ls-0 mb-3 text-capitalize">${order.product_title.includes(";amp;") ? order.product_title.replace(";amp;", "") : order.product_title}</p>
                                        <p class="fw-normal mb-0">${order.variant_title == null ? "" : order.variant_title}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-1 col-3 mb-md-0 px-0">
                                    <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Qty</div>
                                    <p class="fw-normal mb-0">${order.quantity}</p>
                                  </div>
                                  <div class="col-md-2 col-4 mb-md-0 ps-xl-3 px-0 text-md-start">
                                    <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Frequency</div>
                                    <p class="fw-normal mb-0">${order.order_interval_frequency} ${order.order_interval_unit}s</p>
                                  </div>
                                  <div class="col-md-2 col-5 mb-md-0 ps-xl-3 px-0 text-md-start text-center">
                                    <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Next Order</div>
                                    <p class="fw-normal mb-0">${order.next_charge_scheduled_at == null ? "--" : this._formatDate(order.next_charge_scheduled_at, "month/date/year")}</p>
                                  </div>
                                  <div class="col-md-1 col-6 mb-md-0 ps-xl-4 px-0 mt-md-0 mt-4">
                                    <div class="fw-bold ls-0 mb-2 text-capitalize d-md-none">Total</div>
                                    <p class="fw-normal mb-0">${Shopify.formatMoney((order.price * 100) * order.quantity, window.globalVariables.money_format)}</p>
                                  </div>
                                  <div class="re-active d-flex align-items-center justify-content-end col-md-2 col-6 px-0 px-lg-2 text-end mt-md-0 mt-4">${buttonHTML}</div>
                                </div>
                              </div>`;

                    if (order.status == "active") { allActiveSubscripitonHTML += subscripitonHTML; } else if (order.status == "cancelled") { allCancelSubscripitonHTML += subscripitonHTML; } else if (order.status == "expired") { allExpiredSubscripitonHTML += subscripitonHTML; }
                }
            }

            upcomingChargeDate = this._min_date(nextChargeDateArray);
            for (const orderSubscrption of allSubscrptions) {
                if (orderSubscrption.next_charge_scheduled_at == upcomingChargeDate && orderSubscrption.status == "active") {
                    addonUpcomingSubscriptionID = orderSubscrption.id;
                }
            }

            // let date = new Date()
            // let day = date.getDate();
            // day = day.toString().padStart(2, '0');
            // let month = date.getMonth() + 2;
            // month = month.toString().padStart(2, '0');
            // let year = date.getFullYear();
            // let monthAgoDate = `${year}-${month}-${day}`;
            // addresseArray["next_charge_date"] = upcomingChargeDate == undefined ? monthAgoDate : upcomingChargeDate;

            if (upcomingChargeDate != undefined && allActiveSubscripitonHTML != "") {
                address_text = address.address1 != null ? address.address1 : address.address2;
                addresseArray["address_id"] = address.id;
                addresseArray["address_text"] = address_text + ' ' + address.city + ' ' + address.province + ', ' + address.zip;
                addresseArray["next_charge_date"] = upcomingChargeDate == undefined ? monthAgoDate : upcomingChargeDate;
                allAddresseArray.push(addresseArray);
                addresseArray = [];
            }

            if (allActiveSubscripitonHTML == "" && allOnetimeProductsHTML == "" && allCancelSubscripitonHTML == "" && allExpiredSubscripitonHTML == "") {
                addressDisplayClass = "d-none";
            }

            addresseHTML = `${headingHTML}
                            <div class="subscription-order-table mb-md-6 mb-4 ${addressDisplayClass}" data-addr-id="${address.id}">
                                <div class="row align-items-center pb-4 subscriptions-details mx-md-n3 mx-0">
                                <div class="custome-details mb-md-0 mb-6 ps-xl-4 ps-md-3 pe-md-3 px-0">
                                    <div class="mb-1">
                                        <p class="font-size-xl fw-bold ls-0 mb-md-2 mb-1" data-${address.id}-full-name>${address.first_name} ${address.last_name}</p>
                                        <p class="font-size-xl fw-bold ls-0 mb-1 pb-md-0 pb-1" data-${address.id}-full-address>${address.address1 != null ? address.address1 : address.address2} ${address.city}, ${address.province} ${address.zip}</p>
                                    </div>
                                    <a href="#" class="fill-details font-size-sm fw-medium text-decoration-underline" data-shipping-address-id="${address.id}" data-edit-shipping-address-link>Edit Shipping Address</a>
                                </div>
                                <div class="card-details ps-md-7 ps-md-3 pe-md-3 px-0">
                                    <p class="font-size-xl fw-bold ls-0 mb-1"><span class="text-capitalize lh-base" data-visa></span> ****<span data-4digit></span></p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <a href="#" class="fill-details fw-medium font-size-sm text-decoration-underline" data-update-billing-link>Update Billing</a>
                                        <a href="javascript:void(0);" class="font-size-sm fw-medium d-flex align-items-center text-decoration-underline pe-xl-3" data-reward-details-${address.id}>
                                            <span class="d-flex pe-1">
                                            ${rewardDetails}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                </div>
                                <div class="border-bottom d-md-block d-none px-2 py-3">
                                <div class="d-flex align-items-center">
                                    <div class="tab_name fw-bold ls-0 text-capitalize col-7 col-md-4">Product</div>
                                    <div class="tab_name fw-bold ls-0 text-capitalize col-1">Qty</div>
                                    <div class="tab_name fw-bold ls-0 text-capitalize col-2 ps-xl-3">Frequency</div>
                                    <div class="tab_name fw-bold ls-0 text-capitalize col-2 ps-xl-3">Next Order</div>
                                    <div class="tab_name fw-bold ls-0 text-capitalize col-1 ps-xl-4">Total</div>
                                    <div class="tab_name fw-bold ls-0 text-capitalize col-2"></div>
                                </div>
                                </div>
                                ${allActiveSubscripitonHTML}
                                ${allOnetimeProductsHTML}
                                ${allCancelSubscripitonHTML}
                                ${allExpiredSubscripitonHTML}
                                <div class="mt-5 ${btnDisplayClass}">
                                    <a href="#" class="btn btn-outline w-100" data-upcoming-subscription-id="${addonUpcomingSubscriptionID}" data-upcoming-charge-date="${upcomingChargeDate}" data-address-id="${address.id}" data-modal-btn data-add-more-products-btn>+ Add more products</a>
                                </div>
                            </div>`;
            allHTML += addresseHTML;
            headingHTML = "";
        }

        if (!_this.selectors.divSpinner.classList.contains('d-none')) { _this.selectors.divSpinner.classList.add('d-none') }

        _this.selectors.divSubsciptionsList.innerHTML = allHTML;

        if (window.location.href.includes('#billingTab')) {
            document.querySelector('[data-subscription-billing]').click();
        }

        document.querySelectorAll('[data-update-billing-link]').forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                document.querySelector('#billingTab').classList.add('open');
                document.querySelector('#accountTab').classList.remove('open');
                document.querySelector('[data-billing-tab]').classList.add('open');
                document.querySelector('[data-account-tab]').classList.remove('open');
            });
        });

        document.querySelectorAll('[data-apply-reward-link]').forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                this._discountFunc(event);
            })
        });

        document.querySelectorAll('[data-reward-applied-link]').forEach((element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();

                rewardAddressID = event.target.getAttribute('data-reward-address-id');
                rewardDiscountID = event.target.getAttribute('data-discount-id');
                this._getDiscountData(rewardDiscountID);
            });
        });

        document.querySelector('[data-reward-apply-discount-btn]').addEventListener('click', (event) => {
            event.preventDefault();

            rewardDiscountCode = document.querySelector('[data-reward-discount-code]').value;
            if (rewardDiscountCode != "") { this._applyDiscount(event); }
        });

        document.querySelector('[data-reward-remove-discount-btn]').addEventListener('click', (event) => {
            event.preventDefault();
            this._removeDiscount(event);
        });

        document.querySelector('[data-reward-discount-code]').addEventListener('keyup', (event) => {
            event.preventDefault();
            if (document.querySelector('[data-reward-discount-code]').value.length > 0) {
                document.querySelector('[data-reward-apply-discount-btn]').classList.remove('btn-disabled');
            } else {
                document.querySelector('[data-reward-apply-discount-btn]').classList.add('btn-disabled');
            }
        });

        if(window.innerWidth < 1024) {
            document.querySelector('[data-reward-discount-code]').addEventListener('paste', () => {
                document.querySelector('[data-reward-apply-discount-btn]').classList.remove('btn-disabled');
            });
        }

        this._domEventListener();
    }

    _discountFunc() {
        document.querySelector('[data-reward-discount-code]').value = "";
        document.querySelector('[data-apply-div]').setAttribute('data-reward-apply-discount-div', true);
        rewardAddress = event.target.getAttribute('data-reward-address');
        rewardAddressID = event.target.getAttribute('data-reward-address-id');
        document.querySelector('[data-reward-address-text]').innerHTML = rewardAddress;

        // document.querySelector('[data-apply-reward-drawer]').classList.remove("d-none");
        document.querySelector('[data-apply-reward-drawer]').classList.add("opened-drawer");
        siteOverlay.prototype.showOverlay();
        document.querySelector('[data-discount-heading]').innerHTML = "Add discount";
        if (document.querySelector('[data-apply-div]')) {
            document.querySelector('[data-apply-div]').classList.remove("d-none");
        }
        document.querySelector('[data-applied-div]').classList.add("d-none");

        document.querySelector('[data-reward-apply-discount-btn]').classList.add('btn-disabled');
        document.querySelector("[data-reward-error-div]").classList.add("d-none");
        document.querySelector("[data-reward-error-msg]").innerHTML = "";
    }

    // Show Current Subscription Details
    _showCurrentSubscription(eventType, ID) {
        const _this = this;
        if (eventType == "change-product-size") {
            this.selectors.dataSubscriptionProductImg.src = productsJson[currentSubscription.external_product_id.ecommerce].image == null ? window.globalVariables.no_image_replacement : productsJson[currentSubscription.external_product_id.ecommerce].image.src;
            this.selectors.dataSubscriptionProductTitle.innerHTML = currentSubscription.product_title;
            this.selectors.dataSubscriptionProductQty.value = currentSubscription.quantity;
            if (currentSubscription.quantity == 1) {
                this.selectors.btnSubscriptionQtyMinus.classList.add('btn-disabled');
            }

            var varOption1 = "";
            var varOption2 = "";
            var varOption3 = "";
            var variants = productsJson[currentSubscription.external_product_id.ecommerce].variants;
            for (const variant of variants) {
                if (variant.id == currentSubscription.external_variant_id.ecommerce) {
                    varOption1 = variant.option1;
                    varOption2 = variant.option2;
                    varOption3 = variant.option3;
                }
            }

            var optionFlag = false;
            var productOptionsHTML = "";
            var productOptions = productsJson[currentSubscription.external_product_id.ecommerce].options;
            for (const option of productOptions) {
                var optionsHTML = "";
                if (option.name != 'Title') {
                    for (const value of option.values) {
                        var selected = "";
                        if (value == varOption1 || value == varOption2 || value == varOption3) { selected = "selected" }
                      if(value.includes('% off)') == false){
                        optionsHTML += `<option value="${value}" ${selected}>${value}</option>`;
                      }
                    }
                    productOptionsHTML += `<div class="d-flex align-items-center mb-md-4 mb-3 pb-2">
                                            <p class="font-size-md fw-medium mb-0 pe-lg-5 pe-3 w-auto">${option.name}:</p>
                                            <select aria-label="${option.name}" id="${option.name}" class="form-control" data-subscription-product-variant-select>
                                                ${optionsHTML}
                                            </select>
                                        </div>`;
                    this.selectors.divSubscriptionProductVariants.setAttribute('style', 'display: block !important;');
                    optionFlag = true;
                }
                if (optionFlag == false) { this.selectors.divSubscriptionProductVariants.setAttribute('style', 'display: none !important;'); }
            }
            this.selectors.divSubscriptionProductVariants.innerHTML = productOptionsHTML;
            // Get Product Current Variant & Button Hide/Show on Change Product Size/Quantity
            document.querySelectorAll('[data-subscription-product-variant-select]').forEach((element) => {
                element.addEventListener('change', () => {
                    _this._onProductVariantChange();
                    if (productCurrentVariant.id == currentSubscription.external_variant_id.ecommerce && this.selectors.dataSubscriptionProductQty.value == currentSubscription.quantity) {
                        this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.add("d-none"); });
                        this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.add("d-none"); });
                    } else {
                        this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.remove("d-none"); });
                        this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.remove("d-none"); });
                    }
                });
            });
        } else if (eventType == "change-delivery-frequency") {
            this.dashboard.querySelector(`[data-charge-interval-frequency="${currentSubscription.charge_interval_frequency}"][data-order-interval-frequency="${currentSubscription.order_interval_frequency}"][data-order-interval-unit="${currentSubscription.order_interval_unit}"] input`).checked = true;
        } else if (eventType == "skip-change-order-date") {
            let upcomingOrderDate = this._formatDate(currentSubscription.next_charge_scheduled_at, 'month_name date');
            let ndate = currentSubscription.next_charge_scheduled_at.split('-');          
            let nM= ndate[1].replace(/^0+/, '');
            let nD = ndate[2].replace(/^0+/, '');
            let nextOrderDate = this._dateMethods('plus', currentSubscription.charge_interval_frequency, currentSubscription.order_interval_unit, new Date(`${ndate[0]}-${nM}-${nD}`));
            let date = new Date(nextOrderDate);
            // var offset = new Date().getTimezoneOffset();
            // if(offset > 0) {
            //     var getDate = date.getDate() + 1;
            // } else {
            //     var getDate = date.getDate();
            // }
            // let d = '' + getDate;
            let d = '' + date.getDate();
            let m = date.getMonth() + 1;
            let y = date.getFullYear();
            d = d.length < 2 ? `0${d}`: d;
            let nDate = y +'-'+ m +'-'+d;
            this.selectors.dataUpcomingOrderDate.innerHTML = `Your upcoming order on <span>${upcomingOrderDate}</span> will be skipped.`;
            this.selectors.dataUpcomingNextOrderDate.innerHTML = `Your next order will be on <span class="fw-bold">${this._formatDate(nDate, 'month_name date')}.</span>`;
            this.selectors.dataUpcomingNextOrderDate.setAttribute('data-upcoming-next-order-date',nDate);
        }
    }

    // Change Product Size/Quantity
    _updateSubscription(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        _this._getProductCurrentVariant();
        var subscriptionProductQty = this.selectors.dataSubscriptionProductQty.value;

        const config = {
            url: `/subscriptions/${currentSubscription.id}`,
            method: 'PUT',
            data: {
                quantity: subscriptionProductQty,
                external_variant_id: { ecommerce: String(productCurrentVariant.id) }
            },
        }
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: _this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (!data.errors) {
                successType = "update-subscriptions";
                _this._getSubscriptionProducts();
                _this._openConfirmModal();
            }
            currentTarget.classList.remove("loading");
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Change Delivery Frequency
    _changeDeliveryFrequency(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        var charge_interval_frequency = this.dashboard.querySelector('[data-charge-interval-frequency] input:checked').closest('[data-charge-interval-frequency]').getAttribute('data-charge-interval-frequency');
        var order_interval_frequency = this.dashboard.querySelector('[data-order-interval-frequency] input:checked').closest('[data-order-interval-frequency]').getAttribute('data-order-interval-frequency');
        var order_interval_unit = this.dashboard.querySelector('[data-order-interval-unit] input:checked').closest('[data-order-interval-unit]').getAttribute('data-order-interval-unit');

        const config = {
            url: `/subscriptions/${currentSubscription.id}`,
            method: 'PUT',
            data: {
                'charge_interval_frequency': charge_interval_frequency,
                'order_interval_frequency': order_interval_frequency,
                'order_interval_unit': order_interval_unit
            },
        }
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: _this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            successType = "change-delivery-frequency";
            _this._getSubscriptionProducts();
            _this._openConfirmModal();
            currentTarget.classList.remove("loading");
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Skip Or Change Order Date
    _changeNextOrderDate(event, eventType, nextChargeDate) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        Shopify.queue = [];

        var config = {
            url: `/subscriptions/${currentSubscription.id}/set_next_charge_date`,
            method: 'POST',
            headers: { "X-Recharge-Version": "2021-01" },
            data: { 
                date: `${nextChargeDate}` 
            }
        };
        fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: _this.header,
                body: JSON.stringify(config)
            }).then(function(response) {
                return response.json(); // The API call was successful! 
            })
            .then(function(data) {
                _this.selectors.dataNewNextOrderDate.forEach((element) => { element.innerHTML = `${_this._formatDate(nextChargeDate,"month_name date,year")}`; });

                if (oneTimeJson.length > 0) {
                    oneTimeJson.forEach((onetime) => {
                        if (onetime.properties) {
                            onetime.properties.forEach((propertie) => {
                                if (propertie.name == 'uniq_id' && propertie.value == currentSubscription.id) {
                                    Shopify.queue.push(onetime.id);
                                }
                            });
                        }
                    });
                    if (Shopify.queue.length > 0) {
                        Shopify.moveAlong();
                    } else {
                        successType = eventType;
                        _this._getSubscriptionProducts();
                        _this._openConfirmModal();
                        currentTarget.classList.remove("loading");
                    }
                } else {
                    successType = eventType;
                    _this._getSubscriptionProducts();
                    _this._openConfirmModal();
                    currentTarget.classList.remove("loading");
                }
            }).catch(function(err) {
                console.warn('Something went wrong.', err);
            });

        Shopify.moveAlong = function() {
            const request = Shopify.queue.shift();
            let config = {
                url: `/onetimes/${request}`,
                method: 'PUT',
                headers: { "X-Recharge-Version": "2021-01" },
                data: { next_charge_scheduled_at: `${nextChargeDate}` }
            };
            fetch('/tools/ha-api/recharge/common', {
                method: 'PUT',
                headers: _this.header,
                body: JSON.stringify(config)
            }).then(function(data) {
                if (Shopify.queue.length) {
                    Shopify.moveAlong();
                } else {
                    successType = eventType;
                    _this._getSubscriptionProducts();
                    _this._openConfirmModal();
                    currentTarget.classList.remove("loading");
                }
            }).catch(function(err) {
                if (Shopify.queue.length) { Shopify.moveAlong(); };
                console.warn('Something went wrong.', err);
            });
        }
    }

    _getUpcomingCharge(subId){
        const _this = this;
        var config = {
            url: `/charges?subscription_id=${subId}&status=queued`,
            method: 'GET',
            headers: { "X-Recharge-Version": "2021-01" }
        }
        fetch('/tools/ha-api/recharge/common', {
          method: 'POST',
          headers: _this.header,
          body: JSON.stringify(config)
          }).then(function (response) {
              // The API call was successful!
              return response.json();
          }).then(function (data) {
            upcomingCharge = data.charges[0] || null;
          }).catch(function (err) {
              console.warn('Something went wrong.', err);
          });
    }

    // Keep My Subscription
    async _keepSubscription(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");        
        var config = {
            url: `/charges/${upcomingCharge.id}/apply_discount`,
            method: 'POST',
            data: {
                discount_code : discountCode,
            }
        };
// return false;
        if(discountCode != null){
            await fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: _this.header,
                body: JSON.stringify(config)
            }).then(function (response) {
                return response.json(); // The API call was successful!
            }).then(function (data) {
                currentTarget.classList.remove("loading");
                if (data.errors == undefined) {          
                    successType = 'keep-subscriptions';
                    _this._openConfirmModal();
                    _this._getSubscriptionProducts();
                } else {
                    alert(data.errors.discount);
                }
            }).catch(function (err) {
                console.log(err,'err');
            });
        }
            
    }

        // Cancel My Subscription
    async _cancelSubscription(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        removeOnetimeID = [];

        var cancelSubscriptionReason = this.selectors.selectCancelSubscriptionReason.value;
        var cancelSubscriptioncomment = this.selectors.textCancelSubscriptionReason.value ? this.selectors.textCancelSubscriptionReason.value : this.selectors.selectCancelSubscriptionReason.value;

        var config = {
            url: `/subscriptions/${currentSubscription.id}/cancel`,
            method: 'POST',
            data: {
                cancellation_reason: cancelSubscriptionReason,
                cancellation_reason_comments: cancelSubscriptioncomment,
            }
        };
        await fetch('/tools/ha-api/recharge/common', {
            method: 'PUT',
            headers: _this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (!data.errors) {
                successType = 'cancel-subscriptions';
                if (oneTimeJson.length > 0) {
                    oneTimeJson.forEach((onetime) => {
                        if (onetime.properties) {
                            onetime.properties.forEach((propertie) => {
                                if (propertie.name == 'uniq_id' && propertie.value == currentSubscription.id) {
                                    removeOnetimeID.push(onetime.id);
                                }
                            });
                        }
                        if (removeOnetimeID.length > 0) { _this._removeAddonProduct(removeOnetimeID); }
                    });                    
                    _this._openConfirmModal();
                    currentTarget.classList.remove("loading");
                } else {                    
                    _this._getSubscriptionProducts();                    
                    _this._openConfirmModal();
                    currentTarget.classList.remove("loading");
                }                
                
            } else {
                currentTarget.classList.remove("loading");
                console.warn('Something went wrong. Errors :', data.errors);
            }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Reactivate Subscription
    _reactivateSubscription(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        subscriptionID = currentTarget.getAttribute('data-subscription-id');

        const config = {
            url: `/subscriptions/${subscriptionID}/activate`,
            method: 'POST',
            data: [],
        };
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            _this._getSubscriptionProducts();
            currentTarget.classList.remove("loading");
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Update Shipping Address
    _getShippingAddress(addressID) {
        const _this = this;
        // const currentTarget = event.currentTarget;
        // currentTarget.classList.add("loading");

        var config = {
            url: `/addresses/${addressID}`,
            method: 'GET',
            headers: { "X-Recharge-Version": "2021-01" },
            data: []
        };
        fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: _this.header,
                body: JSON.stringify(config),
            })
            .then(response => {
                return response.json(); // The API call was successful!
            }).then(data => {
                shippingAddressID = data.address.id;
                if (data.address.first_name) {
                    this.dashboard.querySelector('[data-first-name]').value = data.address.first_name;
                    this.dashboard.querySelector('[data-first-name]').classList.add('field--filled');
                }
                if (data.address.last_name) {
                    this.dashboard.querySelector('[data-last-name]').value = data.address.last_name;
                    this.dashboard.querySelector('[data-last-name]').classList.add('field--filled');
                }
                if (data.address.address1) {
                    this.dashboard.querySelector('[data-add1]').value = data.address.address1;
                    this.dashboard.querySelector('[data-add1]').classList.add('field--filled');
                }
                if (data.address.address2) {
                    this.dashboard.querySelector('[data-add2]').value = data.address.address2;
                    this.dashboard.querySelector('[data-add2]').classList.add('field--filled');
                }
                if (data.address.city) {
                    this.dashboard.querySelector('[data-city]').value = data.address.city;
                    this.dashboard.querySelector('[data-city]').classList.add('field--filled');
                }
                if (data.address.country) {
                    this.dashboard.querySelector('[data-country]').value = data.address.country;
                    this.dashboard.querySelector('[data-country]').classList.add('field--filled');
                }
                if (data.address.province) {
                    setTimeout(() => {
                        this.dashboard.querySelector('[data-state]').value = data.address.province;
                        this.dashboard.querySelector('[data-state]').classList.add('field--filled');
                    }, 500);
                }
                if (data.address.zip) {
                    this.dashboard.querySelector('[data-zip-code]').value = data.address.zip;
                    this.dashboard.querySelector('[data-zip-code]').classList.add('field--filled');
                }
                if (data.address.phone) {
                    this.dashboard.querySelector('[data-phone-number]').value = data.address.phone;
                    this.dashboard.querySelector('[data-phone-number]').classList.add('field--filled');
                }
                new Shopify.CountryProvinceSelector('AddressCountryNew1', 'address_province', {
                    hideElement: 'AddressProvinceContainer'
                });

                this.selectors.modalCommonBox.classList.add("open");
                this.selectors.modalEditShippingAddresss.classList.remove("d-none");
                document.querySelectorAll('[data-update-shipping-address-btn]').forEach((element) => { element.classList.add("d-none"); });
                document.querySelectorAll('[data-cancel-shipping-address-btn]').forEach((element) => { element.classList.add("d-none"); });
            })
            .catch((err) => {
                console.warn('Something went wrong.', err);
            });
    }

    // Update Shipping Address
    _updateShippingAddress(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        var config = {
            url: `/addresses/${shippingAddressID}`,
            method: 'PUT',
            headers: { "X-Recharge-Version": "2021-01" },
            data: {
                'first_name': this.dashboard.querySelector('[data-first-name]').value,
                'last_name': this.dashboard.querySelector('[data-last-name]').value,
                'address1': this.dashboard.querySelector('[data-add1]').value,
                'address2': this.dashboard.querySelector('[data-add2]').value,
                'city': this.dashboard.querySelector('[data-city]').value,
                'country': "United States",
                // 'country': this.dashboard.querySelector('[data-country]').value,
                'phone': this.dashboard.querySelector('[data-phone-number]').value,
                'province': this.dashboard.querySelector('[data-state]').value || null,
                'zip': this.dashboard.querySelector('[data-zip-code]').value
            }
        };
        fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: _this.header,
                body: JSON.stringify(config),
            })
            .then(response => {
                return response.json(); // The API call was successful!
            }).then(data => {
                if (!data.error && !data.errors) {
                    let fullName = data.address.first_name + ' ' + data.address.last_name;
                    let address1 = data.address.address1 != null ? data.address.address1 : data.address.address2;
                    let fullAddress = address1 + ' ' + data.address.city + ' ' + data.address.province + ' ' + data.address.zip;
                    document.querySelector(`[data-${shippingAddressID}-full-name]`).innerHTML = fullName;
                    document.querySelector(`[data-${shippingAddressID}-full-address]`).innerHTML = fullAddress;
                    // _this._getCustomerAddresses();
                    currentTarget.classList.remove("loading");
                    this.selectors.modalCommonBox.classList.remove("open");
                    this.selectors.modalEditShippingAddresss.classList.remove("d-none");
                    _this.querySelectorAll("[data-error-div]").forEach(element => { element.classList.remove("d-none"); });
                } else if (data.errors) {
                    var errorTxt = "";
                    for (let x in data.errors) { errorTxt += data.errors[x] + "<br/> "; };
                    currentTarget.classList.remove("loading");
                    _this.querySelectorAll("[data-error-div]").forEach(element => { element.classList.remove("d-none"); });
                    _this.querySelectorAll("[data-error-msg]").forEach(element => { element.innerHTML = errorTxt; });
                } else {
                    var errorTxt = "";
                    for (let x in data.error) { errorTxt += data.error[x] + "<br/> "; };
                    currentTarget.classList.remove("loading");
                    _this.querySelectorAll("[data-error-div]").forEach(element => { element.classList.remove("d-none"); });
                    _this.querySelectorAll("[data-error-msg]").forEach(element => { element.innerHTML = data.error; });
                }
            })
            .catch((err) => {
                console.warn('Something went wrong.', err);
            });
    }

    // Update Billing Details
    _updateBillingDetails(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        var config = {
            url: `/customers/${customerDetails.id}/notifications`,
            method: 'POST',
            data: {
                'type': 'email',
                'template_type': 'shopify_update_payment_information'
            }
        };
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: _this.header,
            body: JSON.stringify(config)
        }).then(async function(response) {
            return response; // The API call was successful!
        }).then(function(data) {
            currentTarget.classList.remove("loading");
            currentTarget.classList.add("btn-disabled");
            currentTarget.querySelector('.add-text').innerHTML = 'Sent!';
            setTimeout(() => {
                currentTarget.classList.add("d-none");
                // currentTarget.querySelector('.add-text').innerHTML = 'Send update email';
            }, 3000);
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Apply Discount Code
    _applyDiscount(event) {
            const _this = this;
            const currentTarget = event.currentTarget;
            currentTarget.classList.add("loading");

            var config = {
                url: `/addresses/${rewardAddressID}/apply_discount`,
                method: 'POST',
                headers: { "X-Recharge-Version": "2021-01" },
                data: { discount_code: rewardDiscountCode }
            };
            fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: this.header,
                body: JSON.stringify(config)
            }).then(function(response) {
                return response.json(); // The API call was successful!
            }).then(function(data) {
                if (!data.error) {
                    // _this._getCustomerAddresses();
                    document.querySelector(`[data-reward-details-${rewardAddressID}]`).innerHTML = `<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-asterix">
                                    <path d="M2.91726 1.26327L3.27467 0.188896C3.35956 -0.0663704 3.71784 -0.061735 3.79633 0.195609L4.12665 1.27885C4.17932 1.45164 4.37872 1.52804 4.53128 1.43382L5.48742 0.843285C5.71453 0.703024 5.9861 0.939589 5.88273 1.18774L5.4477 2.23246C5.37829 2.3991 5.48252 2.58739 5.65925 2.6144L6.76677 2.78407C7.02989 2.82435 7.08762 3.18224 6.8508 3.30516L5.85415 3.82248C5.6951 3.90504 5.65546 4.11699 5.7736 4.25269L6.51424 5.10313C6.69018 5.30517 6.50713 5.61686 6.24772 5.55699L5.15568 5.30485C4.98147 5.26465 4.81635 5.40123 4.82078 5.58201L4.84802 6.71528C4.8545 6.98454 4.51628 7.10418 4.35558 6.88951L3.67914 5.98593C3.57119 5.84175 3.35806 5.83903 3.24656 5.98033L2.54754 6.86625C2.38147 7.07668 2.04641 6.94833 2.05967 6.6794L2.11535 5.54716C2.12427 5.36654 1.9627 5.22572 1.78747 5.26145L0.689429 5.48539C0.428599 5.53861 0.25337 5.22229 0.434364 5.0248L1.19616 4.19371C1.3177 4.06112 1.28334 3.84814 1.12644 3.76158L0.143052 3.21884C-0.0905338 3.08993 -0.0238851 2.73364 0.240182 2.70008L1.35157 2.55902C1.52885 2.53648 1.63783 2.35098 1.57268 2.18259L1.1641 1.12708C1.06705 0.876372 1.34439 0.64684 1.56794 0.792855L2.50892 1.40776C2.65896 1.50591 2.86025 1.4347 2.91726 1.26327Z" fill="#EB9575"/>
                                </svg>
                                <sapn class="ps-1" data-reward-applied-link data-discount-id="${data.address.discount_id}" data-reward-address-id="${data.address.id}" data-reward-address="${data.address.address1 != null ? data.address.address1 : data.address.address2} ${data.address.city}, ${data.address.province} ${data.address.zip}">My Rewards</sapn>`;

                    document.querySelectorAll('[data-reward-applied-link]').forEach((element) => {
                        element.addEventListener('click', (event) => {
                            event.preventDefault();
                            rewardAddressID = event.target.getAttribute('data-reward-address-id');
                            rewardDiscountID = event.target.getAttribute('data-discount-id');
                            _this._getDiscountData(rewardDiscountID);
                        });
                    });
                    // document.querySelector('[data-apply-reward-drawer]').classList.add("d-none");
                    document.querySelector('[data-apply-reward-drawer]').classList.remove("opened-drawer");
                    // document.querySelector(`[data-reward-details-${rewardAddressID}]`).innerHTML = "";
                    // document.querySelector(`[data-reward-details-${rewardAddressID}]`).classList.add("spinner");
                    siteOverlay.prototype.hideOverlay();
                    currentTarget.classList.remove("loading");
                } else {
                    document.querySelector("[data-reward-error-div]").classList.remove("d-none");
                    document.querySelector("[data-reward-error-msg]").innerHTML = data.error;
                    currentTarget.classList.remove("loading");
                }
            }).catch(function(err) {
                console.warn('Something went wrong.', err);
            });
        }
        // Remove Discount Code
    _removeDiscount(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add("loading");

        var config = {
            // url: `/charges/${upcomingAddressChargeID}/remove_discount`,
            url: `/addresses/${rewardAddressID}/remove_discount`,
            method: 'POST',
            headers: { "X-Recharge-Version": "2021-01" },
        };
        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: this.header,
            body: JSON.stringify(config)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            if (!data.error) {
                // _this._getCustomerAddresses();
                document.querySelector('[data-reward-discount-code]').value = "";
                // document.querySelector('[data-apply-reward-drawer]').classList.add("d-none");
                document.querySelector('[data-apply-reward-drawer]').classList.remove("opened-drawer");
                document.querySelector(`[data-reward-details-${rewardAddressID}]`).innerHTML = `<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-asterix">
                                    <path d="M2.91726 1.26327L3.27467 0.188896C3.35956 -0.0663704 3.71784 -0.061735 3.79633 0.195609L4.12665 1.27885C4.17932 1.45164 4.37872 1.52804 4.53128 1.43382L5.48742 0.843285C5.71453 0.703024 5.9861 0.939589 5.88273 1.18774L5.4477 2.23246C5.37829 2.3991 5.48252 2.58739 5.65925 2.6144L6.76677 2.78407C7.02989 2.82435 7.08762 3.18224 6.8508 3.30516L5.85415 3.82248C5.6951 3.90504 5.65546 4.11699 5.7736 4.25269L6.51424 5.10313C6.69018 5.30517 6.50713 5.61686 6.24772 5.55699L5.15568 5.30485C4.98147 5.26465 4.81635 5.40123 4.82078 5.58201L4.84802 6.71528C4.8545 6.98454 4.51628 7.10418 4.35558 6.88951L3.67914 5.98593C3.57119 5.84175 3.35806 5.83903 3.24656 5.98033L2.54754 6.86625C2.38147 7.07668 2.04641 6.94833 2.05967 6.6794L2.11535 5.54716C2.12427 5.36654 1.9627 5.22572 1.78747 5.26145L0.689429 5.48539C0.428599 5.53861 0.25337 5.22229 0.434364 5.0248L1.19616 4.19371C1.3177 4.06112 1.28334 3.84814 1.12644 3.76158L0.143052 3.21884C-0.0905338 3.08993 -0.0238851 2.73364 0.240182 2.70008L1.35157 2.55902C1.52885 2.53648 1.63783 2.35098 1.57268 2.18259L1.1641 1.12708C1.06705 0.876372 1.34439 0.64684 1.56794 0.792855L2.50892 1.40776C2.65896 1.50591 2.86025 1.4347 2.91726 1.26327Z" fill="#EB9575"/>
                                </svg>
                                <sapn class="ps-1" data-apply-reward-link data-reward-address-id="${data.address.id}" data-reward-address="${data.address.address1 != null ? data.address.address1 : data.address.address2} ${data.address.city}, ${data.address.province} ${data.address.zip}">Apply My Rewards</sapn>`;
                document.querySelectorAll('[data-apply-reward-link]').forEach((element) => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        _this._discountFunc(event);
                    })
                });
                // document.querySelector(`[data-reward-details-${rewardAddressID}]`).innerHTML = "";
                // document.querySelector(`[data-reward-details-${rewardAddressID}]`).classList.add("spinner");
                siteOverlay.prototype.hideOverlay();
                currentTarget.classList.remove("loading");
            }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Get Subscription Product Variant
    _onProductVariantChange() {
        this._getProductCurrentVariant();
        // this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.remove("d-none"); });
        // this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.remove("d-none"); });
        // if (productCurrentVariant) {
        //     if (!productCurrentVariant.available) {
        //         this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.add("btn-disabled"); });
        //     } else {
        //         this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.remove("btn-disabled"); });
        //     }
        // }
    }
    _getProductCurrentVariant() {
        currentProductOptions = [];
        currentProductVariantsArray = [];

        // if (window.location.href.includes('handle')) {
        //     productCurrentVariant = productsIdJson.variants;
        // } else {
        productCurrentVariant = productsJson[currentSubscription.external_product_id.ecommerce].variants;
        // }

        if (productCurrentVariant.length > 1) {
            productCurrentVariant = false;

            // Get all current values from selectors
            // if (window.location.href.includes('handle')) {
            //     if (document.querySelectorAll('[data-product-variant-select]')) {
            //         document.querySelectorAll('[data-product-variant-select]').forEach((selector) => {
            //             currentProductOptions.push(selector.value);
            //         });
            //         currentProductVariantsArray = productsIdJson.variants;
            //     }
            // } else {
            if (document.querySelectorAll('[data-subscription-product-variant-select]')) {
                document.querySelectorAll('[data-subscription-product-variant-select]').forEach((selector) => {
                    currentProductOptions.push(selector.value);
                });
                currentProductVariantsArray = productsJson[currentSubscription.external_product_id.ecommerce].variants;
            }
            // }

            currentProductVariantsArray.find((variant) => {
                currentVariantOptions = [];
                var option1 = null;
                var option2 = null;
                var option3 = null;

                option1 = variant.option1;
                option2 = variant.option2;
                option3 = variant.option3;

                if (variant.option1 != null) { currentVariantOptions.push(option1); }
                if (variant.option2 != null) { currentVariantOptions.push(option2); }
                if (variant.option3 != null) { currentVariantOptions.push(option3); }

                let mappedValues = currentVariantOptions.map((option, index) => {
                    return currentProductOptions[index] === option;
                });

                if (!mappedValues.includes(false)) {
                    productCurrentVariant = variant;
                    return;
                }
            });
        } else {
            productCurrentVariant = productsJson[currentSubscription.external_product_id.ecommerce].variants[0];
        }
    }

    // Get Addon Product Variant
    _onAddonProductVariantChange() {
        this._getAddonCurrentVariant();
        if (window.location.href.includes('handle')) {
            if (addonCurrentVariant) {
                if (!addonCurrentVariant.available) {
                    document.querySelector('[data-add-product-btn]').classList.add('btn-disabled');
                    document.querySelector('[data-add-checkout-btn]').classList.add('btn-disabled');
                } else {
                    document.querySelector('[data-add-product-btn]').classList.remove('btn-disabled');
                    document.querySelector('[data-add-checkout-btn]').classList.remove('btn-disabled');
                }

                document.querySelector('[data-product-variant-id]').value = addonCurrentVariant.id;
                document.querySelectorAll('[data-addon-subscription-price]').forEach((element) => {
                    element.innerHTML = Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price * (productSellingPlanDiscount / 100))), window.globalVariables.money_format);
                    element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price * (productSellingPlanDiscount / 100))), window.globalVariables.money_format))
                });
                // document.querySelectorAll('[data-addon-subscription-price]').forEach((element) => {
                //     element.innerHTML = Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price / 10)), window.globalVariables.money_format);
                //     element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price / 10)), window.globalVariables.money_format))
                // });
            }
        } else {
            if (addonCurrentVariant) {
                if (!addonCurrentVariant.available) {
                    document.querySelector('[data-add-onetime-product-btn').classList.add('btn-disabled');
                    document.querySelector('[data-add-subscription-product-btn').classList.add('btn-disabled');
                } else {
                    document.querySelector('[data-add-onetime-product-btn').classList.remove('btn-disabled');
                    document.querySelector('[data-add-subscription-product-btn').classList.remove('btn-disabled');
                }

                document.querySelectorAll('[data-addon-onetime-price]').forEach((element) => {
                    element.innerHTML = Shopify.formatMoney(addonCurrentVariant.price, window.globalVariables.money_format);
                    element.setAttribute('data-addon-onetime-price', Shopify.formatMoney(addonCurrentVariant.price, window.globalVariables.money_format))
                });
                document.querySelectorAll('[data-addon-subscription-price]').forEach((element) => {
                    element.innerHTML = Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price * (selling_plan_discount / 100))), window.globalVariables.money_format);
                    element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price * (selling_plan_discount / 100))), window.globalVariables.money_format));
                });
                // document.querySelectorAll('[data-addon-subscription-price]').forEach((element) => {
                //     element.innerHTML = Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price / 10)), window.globalVariables.money_format);
                //     element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((addonCurrentVariant.price - (addonCurrentVariant.price / 10)), window.globalVariables.money_format))
                // });
            }
        }
    }
    _getAddonCurrentVariant() {
        addonProductOptions = [];
        addonCurrentVariant = false;
        if (window.location.href.includes('handle')) {
            // Get all current values from selectors
            if (document.querySelectorAll('[data-product-variant-select]')) {
                document.querySelectorAll('[data-product-variant-select]').forEach((selector) => {
                    addonProductOptions.push(selector.value);
                });
            }
        } else {
            // Get all current values from selectors
            if (document.querySelectorAll('[data-addon-product-variant-select]')) {
                document.querySelectorAll('[data-addon-product-variant-select]').forEach((selector) => {
                    addonProductOptions.push(selector.value);
                });
            }
        }

        producVariantsArray.find((variant) => {
            // get true or false based on options value presented in variant
            // value format would be [true/false,true/fasle,true/false] boolean value based on options present or not
            let mappedValues = variant.options.map((option, index) => {
                return addonProductOptions[index] === option;
            });

            // assign variant details to this.currentVariant if all options are present
            if (!mappedValues.includes(false)) {
                addonCurrentVariant = variant;
                return;
            }
        });
    }

    // Add Addon Product
    _addProduct(event) {
        const _this = this;
        const currentTarget = event.currentTarget;
        currentTarget.classList.add('eventsNone');
        if (currentTarget.querySelector('.add-text')) { currentTarget.querySelector('.add-text').innerHTML = 'Adding...'; }

        _this._getAddonCurrentVariant();

        let addressID = document.querySelector('[data-address-list-select]').value;
        let nextChargeScheduledDate = document.querySelector('[data-next-charge-select]').value;
        let productQty = document.querySelector('[data-product-qty]').value ? document.querySelector('[data-product-qty]').value : 1;
        let productFrequency = document.querySelector('[data-delivery-select]').value ? document.querySelector('[data-delivery-select]').value : 1;
        let productVariantID = addonCurrentVariant.id ? addonCurrentVariant.id : addonProductDefaultVariant.id;
        let addonConfig = {};

        var productType = currentTarget.getAttribute('data-product-type');
        if (productType == "product-subscription") {
            addonConfig = {
                url: `/subscriptions`,
                method: 'POST',
                data: {
                    address_id: addressID,
                    quantity: productQty,
                    next_charge_scheduled_at: nextChargeScheduledDate,
                    order_interval_unit: "month",
                    order_interval_frequency: productFrequency,
                    charge_interval_frequency: productFrequency,
                    external_variant_id: { ecommerce: String(productVariantID) }
                }
            }
        }

        fetch('/tools/ha-api/recharge/common', {
            method: 'POST',
            headers: _this.header,
            body: JSON.stringify(addonConfig)
        }).then(function(response) {
            return response.json(); // The API call was successful!
        }).then(function(data) {
            // window.location.href = '/account';
            currentTarget.closest('[data-add-product-subscription-modal]').querySelector('[data-close-modal]').click();
            _this._getSubscriptionProducts();            
            // currentTarget.classList.remove('eventsNone');
            // if (currentTarget.querySelector('.add-text')) { currentTarget.querySelector('.add-text').innerHTML = 'Add To My Subscription'; }
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });
    }

    // Add Addon Product
    _addAddonProduct(event) {
            const _this = this;
            const currentTarget = event.currentTarget;
            currentTarget.classList.add('eventsNone');
            if (currentTarget.querySelector('.add-text')) { currentTarget.querySelector('.add-text').innerHTML = 'Adding...'; }

            _this._getAddonCurrentVariant();

            let nextChargeScheduledDate = addressUpcomingChargeDate;
            let productQty = this.selectors.dataAddAddonProductQty.value ? this.selectors.dataAddAddonProductQty.value : 1;
            let productFrequency = this.selectors.dataAddonSubscriptionFrequency.value ? this.selectors.dataAddonSubscriptionFrequency.value : 1;
            let productTitle = addonCurrentVariant.name ? addonCurrentVariant.name : addonProductJSON.title;
            let productPrice = addonCurrentVariant.price ? addonCurrentVariant.price : addonProductDefaultVariant.price;
            let productVariantID = addonCurrentVariant.id ? addonCurrentVariant.id : addonProductDefaultVariant.id;
            let productImg = addonProductJSON.featured_image == null ? window.globalVariables.no_image_replacement : addonProductJSON.featured_image;
            let productActualPrice = (productPrice / 100.0).toFixed(2);
            let addonConfig = {};

            var productType = currentTarget.getAttribute('data-product-type');
            if (productType == "subscription") {
                addonConfig = {
                    url: `/subscriptions`,
                    method: 'POST',
                    data: {
                        address_id: addressID,
                        quantity: productQty,
                        next_charge_scheduled_at: nextChargeScheduledDate,
                        order_interval_unit: "month",
                        order_interval_frequency: productFrequency,
                        charge_interval_frequency: productFrequency,
                        external_variant_id: {
                            ecommerce: String(productVariantID)
                        }
                    }
                }
            } else {
                addonConfig = {
                    url: `/onetimes`,
                    method: 'POST',
                    data: {
                        address_id: addressID,
                        price: productActualPrice,
                        quantity: productQty,
                        product_title: productTitle,
                        next_charge_scheduled_at: nextChargeScheduledDate,
                        external_variant_id: { ecommerce: String(productVariantID) },
                        properties: [{
                                name: `addon_img`,
                                value: productImg
                            },
                            {
                                name: "onetime",
                                value: "true"
                            },
                            {
                                name: "uniq_id",
                                value: addressUpcomingSubscriptionID
                            }
                        ]
                    }
                }
            }

            fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: _this.header,
                body: JSON.stringify(addonConfig)
            }).then(function(response) {
                return response.json(); // The API call was successful!
            }).then(function(data) {
                _this._getSubscriptionProducts();
                setTimeout(() => { _this._closeModal(); }, 1000);
                currentTarget.classList.remove('eventsNone');
                if (currentTarget.querySelector('.add-text')) { currentTarget.querySelector('.add-text').innerHTML = 'Add To My Subscription'; }
            }).catch(function(err) {
                console.warn('Something went wrong.', err);
            });
        }
        // Remove Addon Product
    _removeAddonProduct(onetimeID) {
        const _this = this;
        Shopify.moveAlong = function() {
            const request = onetimeID.shift();
            const config = {
                url: `/onetimes/${request}`,
                method: 'DELETE'
            }
            fetch('/tools/ha-api/recharge/common', {
                method: 'POST',
                headers: _this.header,
                body: JSON.stringify(config)
            }).then(function(response) {
                if (onetimeID.length) {
                    Shopify.moveAlong();
                } else {
                    _this._getSubscriptionProducts();
                }
            }).catch(function(err) {
                if (onetimeID.length) { Shopify.moveAlong(); };
                console.warn('Something went wrong.', err);
            });
        }
        if (onetimeID.length > 0) {
            Shopify.moveAlong();
        }
    }

    // Confirm Modal
    _openConfirmModal() {
            this.selectors.modalContent.forEach((modal) => { modal.classList.add('d-none'); });
            this.selectors.modalSuccess.forEach((modal) => { modal.classList.add('d-none'); });
            if (this.selectors.modalConfirmedPopup.classList.contains('d-none')) { this.selectors.modalConfirmedPopup.classList.remove("d-none"); }

            if (successType == "update-subscriptions") { this.selectors.confirmCommon.classList.remove("d-none"); } else if (successType == "change-delivery-frequency") { this.selectors.confirmCommon.classList.remove("d-none"); } else if (successType == "skip-next-order") { this.selectors.confirmSkipNextDate.classList.remove("d-none"); } else if (successType == "chnage-next-order") { this.selectors.confirmChangeNextDate.classList.remove("d-none"); } else if (successType == "keep-subscriptions") { this.selectors.confirmKeepSubscription.classList.remove("d-none"); } else if (successType == "cancel-subscriptions") { this.selectors.confirmCancelSubscription.classList.remove("d-none"); }
    }
        // Close Modal
    _closeModal(event) {
            if (window.location.href.includes('handle')) { 
                window.history.pushState({}, document.title, "/" + "account");
            }

            document.body.style.overflowY = "auto";
            document.body.classList.remove("remove-scroll");

            if (this.selectors.modalCommonBox.classList.contains('open')) { this.selectors.modalCommonBox.classList.remove("open"); }
            if (this.selectors.modalDialog.classList.contains('modal-dialog-full')) { this.selectors.modalDialog.classList.remove("modal-dialog-full"); }

            this.selectors.modalContent.forEach((modal) => { modal.classList.add('d-none'); });
            this.selectors.modalSuccess.forEach((modal) => { modal.classList.add('d-none'); });

            this._resetModal();
        }
        // Back Modal
    _backModal(event) {
            this.selectors.modalContent.forEach((modal) => { modal.classList.add('d-none'); });
            if (this.selectors.modalManageSubscription.classList.contains('d-none')) { this.selectors.modalManageSubscription.classList.remove("d-none"); }
            this._resetModal();
        }
        // Reset Modal
    _resetModal() {
        this.selectors.btnUpdateSubscription.forEach((element) => { element.classList.add("d-none"); });
        this.selectors.btnUpdateSubscriptionCancel.forEach((element) => { element.classList.add("d-none"); });

        this.selectors.btnUpdateFrequency.forEach((element) => { element.classList.add("d-none"); });
        this.selectors.btnUpdateFrequencyCancel.forEach((element) => { element.classList.add("d-none"); });

        this.selectors.divSkipNextOrder.classList.remove("select");
        this.selectors.divChangeNextOrder.classList.remove("select");
        this.selectors.divSkipNextOrderDetails.classList.add("d-none");
        this.selectors.divChangeNextOrderDetails.classList.add("d-none");
        this.selectors.btnSkipNextOrder.forEach((element) => { element.classList.add("d-none"); });
        this.selectors.btnChangeNextOrder.forEach((element) => {
            element.classList.add("d-none");
            element.classList.add("btn-disabled");
        });
        this.selectors.btnSkipChangeCancel.forEach((element) => { element.classList.add("d-none"); });
        this.selectors.idChangeNextOrderDate.flatpickr().clear();

        this.selectors.selectCancelSubscriptionReason.value = "null";
        this.selectors.textCancelSubscriptionReason.value = "";
        this.selectors.btnCancelMySubscription.forEach((element) => { element.classList.add("d-none"); });
        document.querySelector('[data-search-noresult-div]').innerHTML = "";
    }

    // Date Format
    _formatDate(rdate, format) {      
            let date = new Date(rdate);
            let newDate;
            let d ='' + date.getDate();
            let year = date.getFullYear();

            let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            if (format == 'month_name date,year') {
                let ndate = rdate.split('-');
                let m = ndate[1].replace(/^0+/, '');
                let month = monthName[m-1];
                newDate = `${month} ${ndate[2]}, ${ndate[0]}`;
            } else if (format == 'year-month-date') {
                let month = '' + (date.getMonth() + 1);               
                newDate = `${year}-${month}-${d}`;
            } else if (format == 'month/date/year') {
                let ndate = rdate.split('-');             
                newDate = `${ndate[1]}/${ndate[2]}/${ndate[0]}`;
            } else if (format == 'month_name date') {
                let ndate = rdate.split('-');
                let m = ndate[1].replace(/^0+/, '');
                let month = monthName[m-1];
                newDate = `${month} ${ndate[2]}`;
            }
            return newDate;
        }
        // Date Method
    _dateMethods(action, frequency, unit, date) {
        if (action == 'plus' && unit == 'day') { return new Date(date.setDate(date.getDate() + parseInt(frequency))); }
        if (action == 'plus' && unit == 'month') { return new Date(date.setMonth(date.getMonth() + parseInt(frequency))); }
    }
    _min_date(all_dates) {
        var min_dt = all_dates[0];
        var min_dtObj = new Date(all_dates[0]);
        all_dates.forEach(function(dt, index) {
            if (new Date(dt) < min_dtObj) {
                min_dt = dt;
                min_dtObj = new Date(dt);
            }
        });
        return min_dt;
    }
}
customElements.define('custom-dashboard', dashboard);


/**
 * Search Modal Component
 */
class SearchModal extends HTMLElement {
    constructor() {
        super();

        this.searchFormContainer = this.querySelector('[data-search-form]');
        this.searchresults = this.querySelector('[data-predictive-search-product-list-div]');
        this.productListDiv = this.querySelector('[data-product-list-div]');
        this.searchQuery = this.querySelector('form[action="/search"] [name="q"]');

        this.searchFormContainer.addEventListener('keyup', (event) => {
            event.code.toUpperCase() === 'ESCAPE' && this.close()

            var searchValue = document.querySelector('[data-search-value]').value;
            if (searchValue.length > 0) {
                document.querySelector('[data-search-hidden]').classList.add("field--filled");
            } else { document.querySelector('[data-search-hidden]').classList.remove("field--filled"); }
        });

        this.typingTimer;
        this.searchQuery.addEventListener('input', this._queryInput.bind(this));
        this.searchQuery.addEventListener('keydown', (event) => {
            if (event.key == "Enter" || event.keyCode == "13") {
                event.preventDefault();
                return false;
            }
            clearTimeout(this.typingTimer);
        });
    }

    _queryInput(event) {
        let _this = this;
        let inputEle = event.currentTarget;
        let queryValue = inputEle.value.trim();
        clearTimeout(_this.typingTimer);
        _this.typingTimer = setTimeout(function() { _this._queryChange(queryValue); }, 1000);
    }

    _queryChange(queryValue) {
        if (queryValue.length <= 0 || queryValue == null) {
            this.searchresults.classList.add("d-none");
            this.productListDiv.classList.remove("productList");
            return;
        }

        let searchType = this.searchFormContainer.querySelector('[name="type"]').value;
        fetch(`search?q=${queryValue}&type=${searchType}&view=json`)
            // fetch(`${routes.predictive_search}?q=${queryValue}&resources[type]=${searchType}&resources[options][unavailable_products]=last`)
            .then(response => {
                return response.json(); // The API call was successful!
            }).then(response => {
                // const searchResults = response.resources.results;
                const searchResults = response;
                let productsList = '';
                if (searchResults.length > 0) {
                    // if (searchResults.products.length > 0) {
                    searchResults.forEach((result) => {
                        const searchProductPrice = Shopify.formatMoney(result.product.price, window.globalVariables.money_format);

                        const searchProduct_summary = result.product_summary != null ? result.product_summary : "";

                        const searchMobileOverlay = result.product.available == true ? `<a href="javascript:void(0)" class="collection-overlay" data-add-addon-product-btn data-product-handle="${result.product.handle}"></a>` : ``;

                        const searchForm =  result.product.available == true ? `<form class="collection-product__add" method="post" action="/cart/add">
                                                                            <button class="button button--primary collection-product__add-button" type="button" data-submit-button data-product-handle="${result.product.handle}" data-add-addon-product-btn>
                                                                                <span class="button__label">+ Add</span>
                                                                                <span class="button__label" aria-hidden="true">+ Add</span>
                                                                            </button>
                                                                        </form>` : ``;
                        const searchPrice =  result.product.available == true ? `<span>${searchProductPrice}</span>` : `<s><span>${searchProductPrice}</span></s><div class="product-price__soldout">Sold Out</div>`;

                        let resultUI = `<li class="collection__list-item">
                                            <div title="${result.product.title}" data-product-div class="collection-product position-relative collection-product--image-hover collection__list-link">

                                                ${searchMobileOverlay}
                                                <div class="collection-product__images">
                                                    <figure class="image collection-product__image objFit">
                                                        <img src="${result.product.featured_image}" class="image__img" alt="${result.product.title}" srcset="">
                                                    </figure>

                                                    <figure class="image collection-product__image objFit">
                                                        <img src="${result.product.featured_image}" class="image__img" alt="${result.product.title}" srcset="">
                                                    </figure>

                                                    ${searchForm}
                                                </div>
                                                <div class="collection-product__content collection-product-content">
                                                    <div class="collection-product-content__info">
                                                        <div class="collection-product-content__info-title" itemprop="name">${result.product.title}</div>
                                                        <div class="collection-product-content__info-summary">${searchProduct_summary}</div>
                                                    </div>

                                                    <div class="product-price collection-product-content__price" itemprop="offers">
                                                        ${searchPrice}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>`;
                        productsList += resultUI;
                    });
                    if (this.searchresults) {
                        this.searchresults.querySelector('[data-predictive-search-product-list]').innerHTML = productsList;
                        this.searchresults.classList.remove("d-none");
                        this.productListDiv.classList.add("productList");
                        document.querySelector('[data-search-noresult-div]').innerHTML = "";

                        document.querySelectorAll('[data-add-addon-product-btn]').forEach((element) => {
                            element.addEventListener('click', (event) => {
                                var productHandle = element.getAttribute('data-product-handle');
                                fetch(`/products/${productHandle}?view=json`, {
                                    method: 'GET'
                                }).then(function(response) {
                                    return response.json();
                                }).then(function(data) {
                                    if (data) {
                                        addonProductJSON = "";
                                        producVariantsArray = [];
                                        addonProductDataJSON = "";
                                        addonProductDefaultVariant = "";

                                        document.querySelector('[data-addon-product-qty]').value = "1";
                                        document.querySelector('[data-addon-qty-minus-btn]').classList.add('btn-disabled');
                                        document.querySelector('[data-addon-onetime-input]').checked = true;
                                        // document.querySelector('[data-addon-subscription-frequency]').value = "1";
                                        document.querySelector('[data-addon-subscription-frequencys-div]').classList.add('d-none');
                                        document.querySelector('[data-add-onetime-product-btn').classList.remove('d-none');
                                        document.querySelector('[data-add-subscription-product-btn').classList.add('d-none');
                                        document.querySelector('[data-onetime-div]').classList.remove('d-none');

                                        addonProductDataJSON = data;
                                        addonProductJSON = addonProductDataJSON.product;
                                        producVariantsArray = addonProductDataJSON.product.variants;
                                        addonProductDefaultVariant = addonProductDataJSON.product_default_variant;

                                        document.querySelector('[data-addon-product-img]').src = addonProductJSON.featured_image == null ? window.globalVariables.no_image_replacement : addonProductJSON.featured_image;
                                        document.querySelector('[data-addon-product-title]').innerHTML = addonProductJSON.title;

                                        if (addonProductJSON.requires_selling_plan == true) {
                                            document.querySelector('[data-onetime-div]').classList.add('d-none');
                                            document.querySelector('[data-addon-subscription-input]').checked = true;
                                            document.querySelector('[data-addon-subscription-frequencys-div]').classList.remove('d-none');
                                            document.querySelector('[data-add-onetime-product-btn').classList.add('d-none');
                                            document.querySelector('[data-add-subscription-product-btn').classList.remove('d-none');
                                        }

                                        var sellingOptionHTML = "";
                                        var selling_plan_index = 0;
                                        selling_plan_discount = 0;
                                        addonProductJSON.selling_plan_groups.forEach((plan_groups) => {
                                            plan_groups.selling_plans.forEach((selling_plan) => {
                                                if(selling_plan.name.includes("Month")) {
                                                    selling_plan_index = selling_plan_index + 1;
                                                    sellingOptionHTML += `<option value="${selling_plan_index}">${selling_plan.name}</option>`;
                                                    if(selling_plan_index == 1){ selling_plan_discount = selling_plan.price_adjustments[0].value; }
                                                }
                                            });
                                        });
                                        if( sellingOptionHTML != "") { 
                                            document.querySelector('[data-subscription-div]').classList.remove('d-none');
                                            document.querySelector('[data-addon-subscription-frequency]').innerHTML = sellingOptionHTML;
                                        } else { document.querySelector('[data-subscription-div]').classList.add('d-none'); }

                                        if( selling_plan_discount != 0 ) { document.querySelector('[data-addon-subscription-discount]').innerHTML = `Subscribe & Save ${selling_plan_discount}%`;
                                        } else { document.querySelector('[data-addon-subscription-discount]').innerHTML = `Subscribe`; }

                                        document.querySelectorAll('[data-addon-onetime-price]').forEach((element) => {
                                            element.innerHTML = Shopify.formatMoney(producVariantsArray[0].price, window.globalVariables.money_format);
                                            element.setAttribute('data-addon-onetime-price', Shopify.formatMoney(producVariantsArray[0].price, window.globalVariables.money_format))
                                        });
                                        document.querySelectorAll('[data-addon-subscription-price]').forEach((element) => {
                                            element.innerHTML = Shopify.formatMoney((producVariantsArray[0].price - (producVariantsArray[0].price * (selling_plan_discount / 100))), window.globalVariables.money_format);
                                            element.setAttribute('data-addon-subscription-price', Shopify.formatMoney((producVariantsArray[0].price - (producVariantsArray[0].price * (selling_plan_discount / 100))), window.globalVariables.money_format));
                                        });

                                        var optionFlag = false;
                                        var productOptionsHTML = "";
                                        for (const option of addonProductDataJSON.options_with_values) {
                                            var optionsHTML = "";
                                            if (option.name != 'Title') {
                                                for (const value of option.values) {
                                                  if(value.includes('% off)') == false){
                                                     optionsHTML += `<option value="${value}">${value}</option>`;  
                                                  }                                                  
                                                }
                                                productOptionsHTML += `<div class="d-flex align-items-center mb-4 pb-md-0 pb-1">
                                                                        <p class="font-size-md fw-medium mb-0 pe-3 w-auto">${option.name}:</p>
                                                                        <select aria-label="${option.name}" id="${option.name}" class="form-control" data-addon-product-variant-select>${optionsHTML}</select>
                                                                    </div>`;
                                                document.querySelector('[data-addon-product-variants-div]').setAttribute('style', 'display: block !important;');
                                                optionFlag = true;
                                            }
                                            if (optionFlag == false) { document.querySelector('[data-addon-product-variants-div]').setAttribute('style', 'display: none !important;'); }
                                        }
                                        document.querySelector('[data-addon-product-variants-div]').innerHTML = productOptionsHTML;

                                        // Check Current Variant Availability
                                        dashboard.prototype._getAddonCurrentVariant();
                                        if (addonCurrentVariant) {
                                            if (!addonCurrentVariant.available) {
                                                document.querySelector('[data-add-onetime-product-btn').classList.add('btn-disabled');
                                                document.querySelector('[data-add-subscription-product-btn').classList.add('btn-disabled');
                                            } else {
                                                document.querySelector('[data-add-onetime-product-btn').classList.remove('btn-disabled');
                                                document.querySelector('[data-add-subscription-product-btn').classList.remove('btn-disabled');
                                            }
                                        }

                                        document.querySelector('[data-addon-products-modal]').classList.add("d-none");
                                        document.querySelector('[data-modal-dialog]').classList.remove("modal-dialog-full");
                                        document.querySelector('[data-add-mysubscription-modal]').classList.remove("d-none");

                                        // Get Addon Product Current Variant
                                        document.querySelectorAll('[data-addon-product-variant-select]').forEach((element) => {
                                            element.addEventListener('change', () => {
                                                dashboard.prototype._onAddonProductVariantChange();
                                            });
                                        });
                                    }
                                }).catch(function(error) {
                                    console.error('Request failed', error)
                                });
                            });
                        });
                    }
                    if(window.innerWidth < 1024){
                        document.querySelectorAll('.collection__list-item').forEach((element) => {
                            element.addEventListener('touchstart', (event) => {
                                event.preventDefault();
                                event.currentTarget.querySelector('[data-add-addon-product-btn]').click();                
                            });
                        });
                    }
                } else {
                    if (this.searchresults) {
                        this.searchresults.querySelector('[data-predictive-search-product-list]').innerHTML = '';
                        this.searchresults.classList.remove("d-none");
                        this.productListDiv.classList.add("productList");
                        var noResult = `<header class="page-title">
                                            <h1 class="page-title__title">0 result(s) for "${queryValue}"</h1>
                                            <h5 class="page-title__subtitle"></h5>
                                        </header>
                                        <section class="search__empty"><h4>Please try a different search term or go back</h4></section>`;
                        document.querySelector('[data-search-noresult-div]').innerHTML = noResult;
                    }
                }
            }).catch((e) => {
                console.error(e);
            }).finally(() => {});
    }
}
customElements.define('search-modal', SearchModal);

// Header Height
setTimeout(() => { updateTopinRoot(); }, 300);

function updateTopinRoot() {
    let headerEle = document.querySelector('.header-container');
    if (headerEle != undefined) {
        let headerHeight = headerEle.clientHeight;
        document.documentElement.style.setProperty('--bs-navdrawer', `${headerHeight}px`);
    }
}
