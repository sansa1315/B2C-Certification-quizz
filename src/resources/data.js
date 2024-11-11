let questions ={
    1 : {
        question : "A developer is given a task to implement a new Page Designer layout component that doesn't accept certain asset components. How should the developer achieve the above task?",
        options:[],
        answers:[
            {option: "Add component_type_exclusions in the layout json configuration.", correct: true, isSelected:false},
            {option: "Add component_type_inclusion in the layout json configuration.", correct: false, isSelected:false},
            {option: "Add layout_type_exclusion in the other asset components json configuration.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
        "isMultiple" : false

    },
    2 : {
        approach: "What is accomplished by the code below?",
        options : ["< isinclude  url='$URLUtils.url('Account—Header, 'mobile', true)' / >"],
        question: "",
        answers:[
            {option : "Performs a remote include from the Account-Header endpoint.", correct: true, isSelected:false},
            {option : "Performs a local include from the Account-Header endpoint.", correct: false, isSelected:false},
            {option : "Creates a link to the Account-Header endpoint that allows mobile navigation.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
        "isMultiple" : false
    },
    3 : {
        approach:"A developer has these requirements for out-of-stock products:",
        options: [
            "Save the SKUs of the out-of-stock products that the customer is interested",
            "Save the customer email regardless if the customer is a guest or registered",
            "Email the customer when the product is back-in-stock"
        ],
        question : "Which step should the developer perform as part of the solution to achieve the requirements?",
        answers:[
            {option : "Create a new set-of-string type custom attribute to the system object type Profile to save all the SKUs and use the existing email field for the email.", correct: false, isSelected:false},
            {option : "Create a new set-of-string type custom attribute to the system object type Product to save all the customer email addresses for back-in-stock notification.", correct: false, isSelected:false},
            {option : "Create a new custom object type that has a set-of-string type custom attribute for the SKUs and a string for the email field.", correct: true, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    4 : {
        approach: "The developer has been given the following business requirement:",
        options:[
            "The shipping method, 'Free Standard Ground Shipping' has an exclusion for products with 'category equals or is child of electronics-televisions.'",
            "The marketing department has scheduled a sale offering a 'Free Standard Ground Shipping' method for brand XyzTv televisions for the next option months."

        ],
        question : "What method accomplishes this while following best practices?",
        answers:[
            {option : "Extend the code in cartridge/models/shipping/shippingMethod.js using module.superModule and add an exception for the specified brand.", correct: false, isSelected:false},
            {option : "Extend the CheckoutShippingServices controller using module.superModule and add an exception for the specified brand.", correct: true, isSelected:false},
            {option : "Create an allow list for the existing shipping method by adding a product exclusion for 'brand equals XyzTv' to the exclusion list for 'Free Standard Ground Shipping.'", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    5 : {
        approach: "A client has a requirement to render different content on the homepage based on if the customer is logged in or guest user.",
        options: [

        ],
        question : "What should a developer implement to achieve this requirement?",
        answers:[
            {option : "Set the Content Slot configuration so it is based on the system customer group registered, versus unregistered.", correct: true, isSelected:false},
            {option : "Set the Content Asset configuration for a customer that is a registered, versus unregistered, user.", correct: false, isSelected:false},
            {option : "White specific custom code in the Contect Asset for a customer that is a registered, versus unregistered, user", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    6 : {
        approach: "A developer is asked to write a log containing the ID and name of the product with a variable named myProduct.",
        options: [

        ],
        question : "Which snippet Of code should be used?",
        answers:[
            {option : "Logger.warn(The current product is {ø) with name , myProduct.getID(), myProduct.getNane());", correct: true, isSelected:false},
            {option : "Logger.warn(The current product is ${myProduct.getID()} with name ${myProduct.getName()}", correct: false, isSelected:false},
            {option : "Logger.warn(The current product is {O} with name {option}).context(myProduct.getID(), myProduct.getName())", correct: false, isSelected:false},
        ],
        "isAnswered": false,
        "isMultiple" : false
    },
    7 : {
        approach: "A client that sells sport shoes wants to allow its customers to filter products based on the intended activity (such as tennis, jogging, basketball, etc.), but this particular information is not present in the current catalog.",
        options: [

        ],
        question : "Which two actions does a developer need to perform in a B2C Commerce instance to allow this to happen?",
        answers:[
            {option : "Create a new Product custom attribute AND add a new Search Refinement Definition for the desired categories.", correct: true, isSelected:false},
            {option : "Create a new ProductRefinement custom attribute AND add a new Search Refinement Definition for the desired categories.", correct: false, isSelected:false},
            {option : "Create a new Product custom attribute AND add a new viewtype in the storefront catalog settings", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    8 : {
        approach: "A NewsletterSubscription custom object exists that has a key attribute named email of type String and the following script code.",
        options: [
            "var CustomOb3ect — dw. object . CustomOb3 ectNgr . createCustomObject ' Newslet terSubscription ' newsletterFozm.emaiI. value);"
        ],
        question : "However, the NewsletterSubscription custom Object is not persisted. What is a possible reason?",
        answers:[
            {option : "The code shown needs to be wrapped in a transaction.", correct: true, isSelected:false},
            {option : "The code shown needs to be wrapped in a try/catch block.", correct: false, isSelected:false},
            {option : "The code shown is the wrong syntax. The correct syntax is: var CustomObîect  dw.object.CustomObjeetMgr.createcustomobject('NewsletterSubscription', newsletterîorm.email.value);", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    9 : {
        approach: "A developer is using logging in scripts to troubleshoot an issue. They are using the dw.system.Log class to write to speciifc log levels and categories. Which log level is always enabled by default?",
        options: [

        ],
        question : "",
        answers:[
            {option : "FATAL", correct: true, isSelected:false},
            {option : "INFO", correct: false, isSelected:false},
            {option : "ERROR", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    10 : {
        approach: "Given the following OCAPI definitions, which permission or permissions apply?",
        options: [

        ],
        question : "{'resource id': 'sites/ */coupons/*' , 'methods': '[put]', 'read attributes': '(**)', 'write attributes': (**)}",
        answers:[
            {option : "Allows external applications to create coupons", correct: false, isSelected:false},
            {option : "Allows external applications to create, update, and delete coupons", correct: false, isSelected:false},
            {option : "Allow external applications to create, update, and delete both coupons and coupon codes", correct: true, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    11 : {
        approach: "When looking at Custom Object instances for a site, a merchant notices that the creation date is not showing up on the instances in Business Manager.",
        options: [

        ],
        question : "Where should the developer add this attribute to the Custom Object so it is visible for the merchant to see in Business Manager?",
        answers:[
            {option : "Add the creation date to an attribute group for the Custom Object.", correct: true, isSelected:false},
            {option : "Add the creation date to the attributes of the Custom Object.", correct: false, isSelected:false},
            {option : "Mark the existing creation date attribute as visible.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    12 : {
        approach: "A developer has a B2C site and a merchant requirement to add a new locale to it.",
        options: [

        ],
        question : "What are the steps to enable the locale in the Storefront?",
        answers:[
            {option : "Create and configure the locale under Global Preferences section and activate it in Site Preferences.", correct: true, isSelected:false},
            {option : "Create, configure, and activate the locale under Global Preferences section.", correct: false, isSelected:false},
            {option : "C.	Add an alias for the new locale and then create and configure the locale itself under Global Preferences section.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    13 : {
        approach: "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories.",
        options: [

        ],
        question : "Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
        answers:[
            {option : "Create a Synonym Dictionary entry: car accessories, household, technology. Use search mode First Word.", correct: false, isSelected:false},
            {option : "Create a Common Phrase Dictionary entry: car accessories. Use search mode Exact Match.", correct: true, isSelected:false},
            {option : "Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology. Use search mode Exact Match.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    14 : {
        approach: "",
        options: [

        ],
        question : "Which operation should be done in a controller?",
        answers:[
            {option : "Generate the response as JSON.", correct: false, isSelected:false},
            {option : "Use the Script API to generate data for the view.", correct: false, isSelected:false},
            {option : "Create a plain JavaScript object representing a system object.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    15: {
        approach: "",
        options: [

        ],
        question : "A developer observed a specific issue in production, which they cannot reproduce in other environments. The developer wants to do a hot fix to one of the ISML pages, which uses <iscache> tag, to see if that resolves the issue. Which consideration must the developer keep in mind while deploying the hot fix in production?",
        answers:[
            {option : "It will be required to invalidate the cache for the hot fix.", correct: true, isSelected:false},
            {option : "If the page has multiple tags, the highest cache duration will be used in production to determine the resulting page's caching behavior.", correct: false, isSelected:false},
            {option : "The TTL cache setting only affects static content and not the page cache, which could potentially cause the production issue.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    16 : {
        approach: "A retailer notices that the Account Addresses page is showing the wrong shopper's address.",
        options: [

        ],
        question : "Which tool should the developer start with to identify the issue?",
        answers:[
            {option : "Storefront Toolkit", correct: true, isSelected:false},
            {option : "Reports and Dashboards module", correct: false, isSelected:false},
            {option : "Pipeline Profiler", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    17 : {
        approach: "A developer has a sandbox configured with a service and its profile and credential. Now there is a requirement to allow changes to the service URL manually from the sandbox.",
        options: [

        ],
        question : "Which B2C feature should the developer use to achieve the request?",
        answers:[
            {option : "use the service credential URL field.", correct: true, isSelected:false},
            {option : "Use a Globalpreference dedicated for the service URL", correct: false, isSelected:false},
            {option : "Use the service status area, set the override URL checkbox, and then populate the URL field With the required one.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    18 : {
        approach: "A developer implements an Open Commerce API call to add products to a basket. Given the following resource configuration:",
        options: [
            "{resource_id: /baskets/**, methods: [get], read_attributes}"
        ],
        question : "Which modification allows the requests to successfully execute?",
        answers:[
            {option : "Change the 'methods' value to: ('get', 'post').", correct: true, isSelected:false},
            {option : "Change the 'write attributes' value to", correct: false, isSelected:false},
            {option : "Change the 'methods' value to: t 'get'", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    19 : {
        approach: "A developer is writing a server side script that needs to maintain state across calls. The persistent information needed includes these items.",
        options: [
            "The current customer",
            "Whether or not the customer is authenticated",
            "The privacy attributes (such as tracking consent or cookie policy)"

        ],
        question : "Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?",
        answers:[
            {option : "Use a client-side cookie to store the information for the session duration.", correct: false, isSelected:false},
            {option : "Use the Session class, and its additional class references and attributes, in the B2C Commerce API.", correct: true, isSelected:false},
            {option : "Use an SFRA controller. Because it runs server-side, the state is automatically maintained.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    20 : {
        approach: " A Digital Developer has been given a specification to integrate with a REST API for retrieving weather conditions. The service expects parameters to be form encoded. Which service type should the Developer register?",        options: [

        ],
        question : "",
        answers:[
            {option : "FTP", correct: false, isSelected:false},
            {option : "SOAP", correct: false, isSelected:false},
            {option : "HTTP Form", correct: true, isSelected:false},
            {option : "WebDAV", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    21 : {
        approach: "",
        options: [

        ],
        question : "What happens if the log file size limit is reached in custom logging?",
        answers:[
            {option : "Logging is suspended for the day", correct: false, isSelected:false},
            {option : "Logging is suspended for two hours", correct: false, isSelected:false},
            {option : "The log file is deleted and recreated from scratch.", correct: true, isSelected:false},
            {option : "The log file rolls over and the last used log is overwritten", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    22 : {
        approach: "",
        options: [

        ],
        question : "Which line of code creates a content slot that can be included on homepage.isml to display on the home page?",
        answers:[
            {option : '<isslot id="my_banner " description="for home page" type="global" context="content" context- object="${pdict.ContentSearchResult.content}"/>', correct: false, isSelected:false},
            {option : '<isslot id="my_banner " description="for home page" type="global" context="homepage"/>', correct: false, isSelected:false},
            {option : '<isslot id="my_banner " description="for home page" context="global">', correct: true, isSelected:false},
            {option : '<isslot id="my_banner " description="for home page" context="global" context- object="${pdict.CurrentHomePage}"/>', correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    23: {
        approach: "A Digital Developer selects “Show Orderable Products Only” in the Search > Search Preferences Business Manager module",
        options: [

        ],
        question : "Which business goal does this accomplish?",
        answers:[
            {option : "Exclude products from search results if Available to Sell (ATS) = 0", correct: true, isSelected:false},
            {option : "Exclude back-ordered products from showing on the website", correct: false, isSelected:false},
            {option : "Block displaying the product detail page if Available to Sell (ATS) = 0", correct: false, isSelected:false},
            {option : "Exclude pre-order products from search results", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    24: {
        approach: "",
        options: [

        ],
        question : "Universal Containers created a site export file from staging in the global export directory. How should the Digital Developer update their sandbox using this staging site export file?",
        answers:[
            {option : "Perform a data replication from staging", correct: false, isSelected:false},
            {option : "Use the Site Development > Site Import & Export Business Manager module", correct: true, isSelected:false},
            {option : "Download the site export file and use UX Studio to transfer the data to thesandbox.", correct: false, isSelected:false},
            {option : "Use the Site Development > Import & Export Business Manager module.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    25:{
        approach: "A Digital Developer added a file named MyBusinessController.js in the cartridge named app_project. The project design calls for this new file to override MyBusinessController.js in client_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controllers cartridges.",
        options: [

        ],
        question : "Which cartridge path meets the project requirements?",
        answers:[
            {option : "client_project:app_project:storefront_controllers:storefront_core", correct: false, isSelected:false},
            {option : "app_project:storefront_controllers:storefront_core", correct: false, isSelected:false},
            {option : "app_project:client_project:storefront_controllers:storefront_core", correct: true, isSelected:false},
            {option : "storefront_core:storefront_controllers:client_project:app_project", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    26:{
        approach: "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded",
        options: [

        ],
        question : "What action should the Developer take to stop the quota violation? chosse two options",
        answers:[
            {option : "Rewrite the code that is causing the overage.", correct: true, isSelected:false},
            {option : "Change the Business Manager configuration for the quota settings.", correct: false, isSelected:false},
            {option : "Take no action, the overage will be resolved when concurrent visitors are reduced.", correct: true, isSelected:false},
            {option : "Ask support to remove the quota limit.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    27:{
        approach: "Universal Containers wants to add a model field to each product. Products will have locale specific model values",
        options: [

        ],
        question : "How should the Digital Developer implement the requirement?",
        answers:[
            {option : "Utilize resource bundles for translatable values.", correct: false, isSelected:false},
            {option : "Set the model field as a localizable attribute.", correct: true, isSelected:false},
            {option : "Store translated model values in different fields; one field for each locale", correct: true, isSelected:false},
            {option : "Add model to a new custom object with localizable attributes", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    28:{
        approach: "A Digital Developer must resolve a performance issue with product tiles. The Developer determines that the product tiles are NOT being cached for a long enough period.",
        options: ["A. Enable cache information in the storefront toolkit and view the cache information for the product tile.",
            "B. View the cache information provided by the Merchant Tools > Technical Reports Business Manager module.",
            "C. View the product list page cache settings provided in the Administration > Manage Sites Business Manager module",
            "D. Enable the template debugger to verify the cache times for the producttile.isml template."

        ],
        question : "Which two methods can the Developer use to verify the cache settings for the product tiles? ",
        answers:[
            {option : "A, B", correct: false, isSelected:false},
            {option : "A, C", correct: false, isSelected:false},
            {option : "D, C", correct: true, isSelected:false},
            {option : "B, C", correct: false, isSelected:false},
        ],
        "isAnswered": false,
        "isMultiple" : false
    },
    29:{
        approach: "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. The app_storefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:int_paypal:app_storefront.",
        options: [ "The Developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template for the new site."

        ],
        question : "Which modification should be made to the new cartridge path?",
        answers:[
            {option : "Set the cartridge path so that app_newsite is before app_storefront.", correct: true, isSelected:false},
            {option : "Set the cartridge path so that app_storefront is before int_cybersource", correct: false, isSelected:false},
            {option : "Set the cartridge path to include only app_newsite.", correct: false, isSelected:false},
            {option : "Set the cartridge path so that app_newsite is after app_storefront", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    30:{
        approach: "Universal Containers specifies a new category hierarchy for navigating the digital commerce storefront. A Digital Developer uses Business Manager to manually create a catalog with the specified category hierarchy, then uses the Products & Catalogs > Import & Export module to export the catalog as a file.",
        options: [

        ],
        question : "How can other Developers with sandboxes on the same realm create the same catalog in their own sandboxes?",
        answers:[
            {option : "Use Business Manager to upload and import a copy of the export file obtained from the original Developer", correct: true, isSelected:false},
            {option : "Use the remote upload capability of the Site Import & Export module of Business Manager.", correct: false, isSelected:false},
            {option : "Use the import capability of the Site Import & Export module of Business Manager.", correct: true, isSelected:false},
            {option : "Use the Business Manager Data Replication module to replicate the catalog from the original Developer's sandbox", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    31:{
        approach: "Given the file structure below, which ISML method call renders the customLandingPage template? content/custom/customLandingPage.isml",
        options: [

        ],
        question : "",
        answers:[
            {option : ". ISML.renderTamplate('cartridge/templates/default/content/custom/customLandingPage');", correct: false, isSelected:false},
            {option : "ISML('content/custom/customLandingPage');", correct: false, isSelected:false},
            {option : "ISML.render('content/custom/customLandingPage');", correct: false, isSelected:false},
            {option : "ISML.renderTemplate('content/custom/customLandingPage');", correct: true, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    32:{
        approach: "A business user wants to add a link to a content page from within the body of another content asset. The target content asset ID is: terms-and-conditions. Which link function generates the correct link?",
        options: [

        ],
        question : "",
        answers:[
            {option : "$include('Page-Include', 'cid', 'terms-and-conditions')$", correct: false, isSelected:false},
            {option : "$http('Content-Page', 'cid', 'terms-and-conditions')$", correct: false, isSelected:false},
            {option : "$httpUrl('Content-Show', 'cid', 'terms-and-conditions')$", correct: true, isSelected:false},
            {option : "$url('Page-Show', 'cid', 'terms-and-conditions')$", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    33:{
        approach: "A Digital Developer is adding support for an additional language other than the default. The locale code for the new language is de.",
        options: [

        ],
        question : "In which folder should the developer place resource bundles?",
        answers:[
            {option : "templates/de", correct: false, isSelected:false},
            {option : "templates/default", correct: false, isSelected:false},
            {option : "templates/resources", correct: true, isSelected:false},
            {option : "templates/default/resources", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    34:{
        approach: "Why should a Digital Developer use ProductSearchModel.getProducts() instead of Category.getOnlineProducts() to access products?",
        options: [

        ],
        question : "",
        answers:[
            {option : "It is more readable code.", correct: false, isSelected:false},
            {option : "It has fewer lines of code", correct: false, isSelected:false},
            {option : "It uses the search index.", correct: true, isSelected:false},
            {option : "It reduces accesses to the application server.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    35:{
        approach: "A Digital Developer wants pass control to an ISML template from a JavaScript Controller and load product on the pipeline dictionary with the name myProduct",
        options: [

        ],
        question : "",
        answers:[
            {option : 'ISML.renderTemlpate ( "helloworld.isml", { "myProduct": "product" });', correct: false, isSelected:false},
            {option : 'ISML.renderTemlpate ( "helloworld.isml", { "product": myProduct });', correct: false, isSelected:false},
            {option : 'ISML.renderTemlpate ( "helloworld.isml", { product: myProduct });', correct: false, isSelected:false},
            {option : 'ISML.renderTemlpate ( "helloworld.isml", { myProduct: product });', correct: true, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    36:{
        approach: "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties.",
        options: [

        ],
        question : "To which file should the developer add German string values?",
        answers:[
            {option : "checkout_de.properties in resources folder", correct: true, isSelected:false},
            {option : "checkout.properties in the de locale folder", correct: false, isSelected:false},
            {option : "checkout.properties in the default locale folder", correct: false, isSelected:false},
            {option : "de_checkout.properties in resources folder", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    37:{
        approach: "A Digital Developer has a new requirement to disable the 'Discover' credit card type for all checkouts",
        options: [

        ],
        question : "What does the Developer need to change in Business Manager to fulfill this requirement?",
        answers:[
            {option : "Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.", correct: false, isSelected:false},
            {option : "Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module", correct: false, isSelected:false},
            {option : "Credit cards in the Merchant Tools > Ordering > Payment Methods module", correct: true, isSelected:false},
            {option : "Credit card exclusion rules in the CreditCardType.json configuration file", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    38:{
        approach: "A Digital Developer needs to store information temporarily and decides to create a custom object",
        options: [

        ],
        question : "Which code creates a custom object?",
        answers:[
            {option : "CustomObject.createCustomObject(CustomObjectType,primaryKey);", correct: false, isSelected:false},
            {option : "CustomObject.createCustomObject(primaryKey,CustomObjectType);", correct: false, isSelected:false},
            {option : "CustomObjectMgr.createCustomObject(primaryKey);", correct: false, isSelected:false},
            {option : "CustomObjectMgr.createCustomObject(CustomObjectType,primaryKey)", correct: true, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    39:{
        approach: "Universal Containers wants to give customers the ability to refine product search results by a product custom attribute, weightCapacity",
        options: [

        ],
        question : "Which series of steps should a Digital Developer take to show this refinement on the storefront?",
        answers:[
            {option : "Define a sorting rule for weightCapacity, then rebuild the product search index", correct: false, isSelected:false},
            {option : "Define a search refinement for weightCapacity, then rebuild the product search index", correct: true, isSelected:false},
            {option : "Define search-suggestion buckets for weightCapacity, then rebuild the product search index", correct: false, isSelected:false},
            {option : "Define a search refinement for weightCapacity, then clear the page cache segment for Search- Show", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    40:{
        approach: "A Digital Developer needs to check for product inventory in a specific inventory list using the Open Commerce API. An example request URL is:",
        options: ["htttp://sitegenesis.demandware.net/dw/data/v18_3/inventory_lists/ecom-inventory/product_inventory_records/00883408601"

        ],
        question : "Which resource_id value enables the appropriate resource?",
        answers:[
            {option : "/inventory_lists/*", correct: true, isSelected:false},
            {option : "/inventory_lists/**", correct: false, isSelected:false},
            {option : "/inventory_list_search", correct: false, isSelected:false},
            {option : "/products/*", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    41:{
        approach: "Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
        options: [

        ],
        question : "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects",
        answers:[
            {option : "The Auto-Upload setting is enabled for the server connection", correct: true, isSelected:false},
            {option : "The Active Server setting is enabled for the server connection", correct: false, isSelected:false},
            {option : "The credentials for the server connection are correctly entered", correct: true, isSelected:false},
            {option : "The cartridge is for the current version of B2C Commerce.", correct: true, isSelected:false},
            {option : "The server is configured to accept incoming connections", correct: true, isSelected:false},
        ],
        "isAnswered": false,
        "isMultiple" : true
    },
    42:{
        approach: "The following code ensures that an address ID CANNOT be used if it is already in use by another address in the customer’s address book. There is a problem with the code. The error message for an invalid address ID is never shown to the user on the form field.",
        options: [

        ],
        question : "How should the Digital Developer resolve this issue so that the error message is displayed on the address ID form field?",
        answers:[
            {option : "addressForm.invalidateFormElement('addressid');", correct: false, isSelected:false},
            {option : "addressForm.addresssid.invalidateFormElement = true;", correct: false, isSelected:false},
            {option : "addressForm.invalidateFormElement(addressForm.addressid);", correct: true, isSelected:false},
            {option : "addressForm.addresssid.invalidateFormElement();", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    43:{
        approach: "Assume the code below is executing: Business Manager has the configuration: Active Log category is “root” with log level of 'info'",
        options: [

        ],
        question : "Given this information, what is the beginning of the filename in which the log will be written?",
        answers:[
            {option : "xyz", correct: false, isSelected:false},
            {option : "custominfo-blade ", correct: false, isSelected:false},
            {option : "custom-export", correct: false, isSelected:false},
            {option : "custom-xyz", correct: true, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    44:{
        approach: "A Digital Developer has identified that the code segment below is causing performance problems",
        options: [

        ],
        question : "What should the Developer do to improve the code?",
        answers:[
            {option : "Use a system attribute instead of the isOnSaleFlag custom attribute", correct: false, isSelected:false},
            {option : "Avoid post-processing and use the isOnSaleFlag attribute as a search refinement", correct: true, isSelected:false},
            {option : "Breaks the process into separate loops", correct: false, isSelected:false},
            {option : "Avoid using an Iterator and use a Collection instead", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    45:{
        approach: "",
        options: [

        ],
        question : "What is the correct syntax to define hooks in <code>package.json</code> file in order to configure functionality to be called at a specific point in your application flow or at a specific event?",
        answers:[
            {option : "{\"hooks\": \"./cartridge/scripts/hooks.json\"}", correct: true, isSelected:false},
            {option : "{\"hooks\": {\"name\":\"dw.ocapi.shop.basket.calculate\", \"script\":\"./hooks\"}}", correct: false, isSelected:false},
            {option : "A and B are both correct.", correct: true, isSelected:false},
            {option : "You can't define hooks. This functionality cannot be extended and its purpose it's just for OCAPI.", correct: false, isSelected:false},
        ],
        "isAnswered": false,
"isMultiple" : false
    },
    "46": {
      "approach": "",
      "options": [],
      "question": "What is the correct syntax to define hooks in <code>package.json</code> file in order to configure functionality to be called at a specific point in your application flow or at a specific event?",
      "answers": [
        {
          "option": "<code>{\"hooks\": \"./cartridge/scripts/hooks.json\"}</code>",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "b)&nbsp; <code>{\"hooks\": {\"name\":\"dw.ocapi.shop.basket.calculate\", \"script\":\"./hooks\"}}</code>",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and B are both correct.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "d)&nbsp;You can't define hooks. This functionality cannot be extended and its purpose it's just for OCAPI.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "47": {
      "approach": "",
      "options": [],
      "question": "How would you make a variable be persistent during multiple pages for your current Site?",
      "answers": [
        {
          "option": "a)&nbsp;<code>&lt;isset name=\"var\" scope=\"session\"... </code>",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "b)&nbsp; <code>&lt;isset name=\"var\" scope=\"request\"...</code>",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "<code>&lt;isset name=\"var\" scope=\"page\"...</code>",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "<code>&lt;isset name=\"var\" scope=\"site\"...</code>",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "48": {
      "approach": "",
      "options": [],
      "question": "What would be the expected cache policy for a page that is rendered by another page where its controller has defined <code>cache.applyDefaultCache</code> in his middleware chain? Choose all correct answers that apply.",
      "answers": [
        {
          "option": "Same cache would be applied",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "If this page is rendered by another controller with another cache configuration it would overwrite the previous one.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "If this page is included using <code>&lt;isinclude url=\"\"... /&gt;</code> no cache would be applied.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "It won’t be cached.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "49": {
      "approach": "",
      "options": [],
      "question": "Cache for stored pages are only invalidated and a new one pulled from the Application Server when:",
      "answers": [
        {
          "option": "The defined caching time is exceeded or a replication is performed",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "b)&nbsp;The merchant triggers an explicit page cache invalidation in Business Manager",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "c)&nbsp;The administrator modifies TTL value to 0 in Administration &gt; Sites &gt; Manage Sites &gt; Cache.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "d)&nbsp;A and&nbsp;B&nbsp;are correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "50": {
      "approach": "",
      "options": [],
      "question": "What happens if the log size limit is reached?",
      "answers": [
        {
          "option": "A) An email is sent to the administrator account defined in BM.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Old log messages are removed by the new ones.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logging is suspended until the next day.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Log size limits just exist on sandbox instances.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "51": {
      "approach": "",
      "options": [],
      "question": "Imagine your client requested you to send additional information about the client's previous orders. You decide to extend the Controller Order-History to send more data to the view. Is it necessary you replicate the middleware calls exactly?",
      "answers": [
        {
          "option": "a)&nbsp;Yes, otherwise you will get an Error with the text “Params do not match route”.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "b)&nbsp;No, it’s a bad practice because it will execute those middleware twice.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Yes, otherwise you will get an Error with the text Middleware chain can not be completed.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "No, if the original controller has middleware it is better to modify the endpoint.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "52": {
      "approach": "",
      "options": [],
      "question": "Given this code. What would be the expected log file name?<pre class=\"prettyprint linenums\">var Logger = require('dw/system/Logger');\nLogger.getLogger('service', 'recaptcha').error('error message’');</pre>",
      "answers": [
        {
          "option": "a)&nbsp;custom-recaptcha-blade3-1.mon.demandware.net-0-appserver-20210503.log",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "recaptcha-service-blade3-1.mon.demandware.net-0-appserver-20210503.log",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "custom-service-blade3-1.mon.demandware.net-0-appserver-20210503.log",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "error-recaptcha-blade3-1.mon.demandware.net-0-appserver-20210503.log",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "53": {
      "approach": "",
      "options": [],
      "question": "How looks the code that generates this log file and content:<br><pre class=\"prettyprint linenums\">custom-service-blade3-1.mon.demandware.net-0-appserver-20210503.log\nERRORPipelineCallServlet|1726457216|Sites-RefArch-en-Site|Home-Show|PipelineCall|-zOfYSp7z4 custom.recaptcha [] Recaptcha validation failed.</pre><br><br>",
      "answers": [
        {
          "option": "a)&nbsp; <code>var Logger = require('dw/system/Logger'); Logger.getLogger('service', 'recaptcha').error('Recaptcha validation failed');</code>",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "<code>require('dw/system/Logger').getLogger('service').error('Recaptcha validation failed');</code>",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "<code>require('dw/system/Logger').getType('error').msg('Recaptcha validation failed');</code>",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "<code>require('dw/system/Logger').getType('error').msg('Recaptcha validation failed', 'recaptcha');</code>",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "54": {
      "approach": "",
      "options": [],
      "question": "What service type will you select on BM while creating your service to integrate a REST API with encoded form data?",
      "answers": [
        {
          "option": "SOAP Form",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "HTTP",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "HTTP Form",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "REST",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "55": {
      "approach": "",
      "options": [],
      "question": "Which is the correct syntax for passing variable attributes to a log message?",
      "answers": [
        {
          "option": "a)&nbsp;Logger.warn('Content asset with ID {0} is offline', req.querystring.cid);",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "b)&nbsp;Logger.warn('Content asset with ID ' + req.querystring.cid + ' is offline');",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "c)&nbsp;Logger.warn('Content asset with ID ' + JSON.parse(req.querystring.ci+ ' is offline');",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logger.warnWithParams('Content asset with ID {0} is offline', req.querystring.cid);",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "56": {
      "approach": "",
      "options": [],
      "question": "Which of these topics are true about product bundles…",
      "answers": [
        {
          "option": "a)&nbsp;Are a separate product with its own SKU and price.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Are unaffected by the price of the individual products.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "You can not create a bundle within a bundle.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "d)&nbsp;None of these options.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;A and B&nbsp;are correct",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "57": {
      "approach": "",
      "options": [],
      "question": "After configuring the storefront catalog for your site... realize that one of your main categories is not displaying. What could be the reason?",
      "answers": [
        {
          "option": "No search refinement definitions are defined for this category",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Products must be assigned to categories to be shown on the storefront.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Categories must be online in order to be visible.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "d)&nbsp;B and C",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;There are no sorting rules assigned to this category.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "58": {
      "approach": "",
      "options": [],
      "question": "How would you find what file is having issues in a call that depends on multiple files and has a few includes?",
      "answers": [
        {
          "option": "Business Manager &gt; Administration &gt; Site development &gt; Development Setup. Access to the log center.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Business Manager &gt; Administration &gt; Site development &gt; Development Setup. Logs browser folder via WebDav.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Merchant Tools &gt; Site Preferences &gt; Logs.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and B are correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "59": {
      "approach": "",
      "options": [],
      "question": "How can you add locale-specific images for your site?",
      "answers": [
        {
          "option": "Using custom preferences.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Using custom objects.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Using Business Manager Image Browser.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Uploading image on cartridge static folder.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;C&nbsp;and D&nbsp;are correct",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "60": {
      "approach": "",
      "options": [],
      "question": "How can you replicate your sandbox custom preferences to staging and production instances?",
      "answers": [
        {
          "option": "Do changes manually in staging and replicate to production.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Data replication from your sandbox targeting production.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Data replication from your sandbox targeting staging.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Export your sandbox custom preferences and import them to staging and then data replication to production.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;A and C&nbsp;are correct",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "f)&nbsp;A&nbsp;and D&nbsp;are correct",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "61": {
      "approach": "",
      "options": [],
      "question": "Is it possible to create custom steps for business manager administration jobs?",
      "answers": [
        {
          "option": "a)&nbsp;Create a steptypes.json file that describes the job step and put the file in the root directory of the cartridge.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a customsteps.json file that describes the job step and put the file in the root directory of the cartridge.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a steptypes.xml file that describes the job step and put the file in the root directory of the cartridge.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and C are both correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "62": {
      "approach": "",
      "options": [],
      "question": "Choose correct process to create a custom step job",
      "answers": [
        {
          "option": "Create a cartridge, create a task oriented module, define a job step in steptypes.json file and upload the cartridge and include it on the cartridge path.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create cartridge, create chunk oriented common js script, define a job step in steptypes.xml file and upload the cartridge and include it on the cartridge path.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a cartridge, create a task oriented module, define a job step in customsteps.json file and upload the cartridge and include it on the cartridge path.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and B are correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "63": {
      "approach": "",
      "options": [],
      "question": "After doing the last modifications needed for the homepage you realise that your changes are not being reflected. What could be the reason?",
      "answers": [
        {
          "option": "Quota limit reached.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Code not uploaded to sandbox.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Cache is enabled in your sandbox.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Code not compiled.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;A is false",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "64": {
      "approach": "",
      "options": [],
      "question": "What is the correct class to create/instantiate a webservice in Salesforce B2C Commerce Cloud?",
      "answers": [
        {
          "option": "ServiceRegistry",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "LocalServiceRegistry",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "HTTPService",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "HTTPServiceRegistry",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "65": {
      "approach": "",
      "options": [],
      "question": "Your service needs to have a mock call configured for testing. How can you do it?",
      "answers": [
        {
          "option": "Custom site preference with boolean value.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Extend LocalServiceRegistry System object to add mock value.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Enable service mode Mocked and add mockCall attribute to ServiceCallback.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "All answers are incorrect.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "66": {
      "approach": "",
      "options": [],
      "question": "How can you handle service call exceptions?",
      "answers": [
        {
          "option": "Implement parseExeception method in ServiceCallback.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Add try-catch block in parseResponse method in ServiceCallback.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Call .setThrowOnError when calling the service to throw a JavaScript error if the result status is not OK",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Service call doesn’t throw exceptions by default if you don’t enable exception breaker on service profile config.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "67": {
      "approach": "",
      "options": [],
      "question": "Every time your customers log in your storefront a request using webservice framework is made to 3rd party application. What type of service should you implement in order to perform those requests in real time?",
      "answers": [
        {
          "option": "HTTP service type",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "HTTP FORM service type",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and B are correct.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "All answers are incorrect.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "68": {
      "approach": "",
      "options": [],
      "question": "What is the correct syntax to include content assets using a controller call?",
      "answers": [
        {
          "option": "ContentMgr.getContent(id : String) : Content",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "AssetMgr.getContent(id : String) : Content",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Content.getAsset(id : String) : Content",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "ContentMgr.getAsset(id : String) : Content",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "69": {
      "approach": "",
      "options": [],
      "question": "Which modules can be used to display images on the storefront?",
      "answers": [
        {
          "option": "Content Slots",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Content Assets",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "ISML template",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Content Library",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;D&nbsp;is not correct",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "70": {
      "approach": "",
      "options": [],
      "question": "What can you import at Merchant Tools &gt; Content &gt; Import &amp; Export?",
      "answers": [
        {
          "option": "Catalogs, Pricebooks &amp; Inventory lists",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Libraries",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Images, Content Assets and folders",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Customers, Libraries and Custom Objects.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "71": {
      "approach": "",
      "options": [],
      "question": "Which is the correct syntax to include a content asset inside the body of another content asset?",
      "answers": [
        {
          "option": "$link-page:cid=ABOUT_US$",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "$include('Page-Show', 'cid', 'ABOUT_US')$",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "$url('Page-Show', 'cid', 'ABOUT_US')$",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "$httpUrl('Page-Show', 'cid', 'ABOUT_US')$",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "72": {
      "approach": "",
      "options": [],
      "question": "Which is the correct syntax to use $url$ with parameters inside content assets?",
      "answers": [
        {
          "option": "$url('<pipeline>' [, '<key1>', '<value1>', '<key2>', '<value2>', ...])$",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "$url('<pipeline>' [, 'cid', '<value1>'])$",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "$url('<type>[:key1=value1;key2=value2; ...])$",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "None of the above are correct.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "73": {
      "approach": "",
      "options": [],
      "question": "Which is the correct syntax to use $include$ and what is the purpose of?",
      "answers": [
        {
          "option": "$include('<pipeline>'[, '<key1>', '<value1>', '<key2>', '<value2>', ...])$ - Can be used to include the result of another server call.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "$include('<pipeline>' [, '<key1>', '<value1>', '<key2>', '<value2>', ...])$ - Calls the Link pipeline in the Reference Application to call pipelines.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "$include('<pipeline>' [, 'cid', '<value1>'])$ - Can be used to include the result of another server call.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "$include('<type>[:key1=value1;key2=value2; ...])$ - Calls the Link pipeline in the Reference Application to call pipelines.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
      "isMultiple" : false
    },
    "74": {
      "approach": "",
      "options": [],
      "question": "In which situation would you use $url$ over $include$?",
      "answers": [
        {
          "option": "When you need to create an absolute URL that retains the protocol of the outer request.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "When you need to include the result of another server call.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "When you need to create an absolute URL, but with the https protocol.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "When you need to create an absolute URL, but with the http protocol.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "75": {
      "approach": "",
      "options": [],
      "question": "In the production instance you have two pricebooks and two catalogs from two different sites that need to be imported once a month. Which steps do you follow to import and build them?",
      "answers": [
        {
          "option": "Create two jobs that will import the pricebooks, catalogs and rebuild indexes.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Create one job with parallel flow that will import the pricebooks, catalogs and rebuild indexes for each site.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Do it manually, because it is just once a month.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Go to BM &gt; Administrator &gt; Site Development &gt; Site import &amp; Export and import the catalog and pricebooks.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "76": {
      "approach": "",
      "options": [],
      "question": "In your site you have a master catalog with all products available for the current site, but not all of them are assigned to the storefront catalog. How would you do an export with just products assigned to the storefront catalog?",
      "answers": [
        {
          "option": "Merchant Tools &gt; Product &amp; Catalogs &gt; Import &amp; Export &gt; Export the storefront catalog for current site.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Merchant Tools &gt; Online Marketing &gt; Import &amp; Export &gt; Export the storefront catalog for current site.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Administration &gt; Site Development &gt; Site Import &amp; Export &gt; Export Catalogs &gt; Select storefront catalog for current site.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and C are both correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "77": {
      "approach": "",
      "options": [],
      "question": "You are about to perform a master catalog import in your sandbox. What kind of import mode will you execute in order to update the master catalog and add new products to the existing one?",
      "answers": [
        {
          "option": "UPDATE",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "MERGE",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "REPLACE",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "B and C are correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "78": {
      "approach": "",
      "options": [],
      "question": "Which command would you run from package.json in order to compile all your code?",
      "answers": [
        {
          "option": "npm run build",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "npm run compile",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "npm run build:all",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "npm run compile:all",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "79": {
      "approach": "",
      "options": [],
      "question": "What kind of configurations are needed in order to extend the Business Manager?",
      "answers": [
        {
          "option": "Create needed extension points on the bm_extensions.xml file.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a custom cartridge and assign it on the Business Manager cartridge path (Administration &gt; Sites &gt; Manage Sites &gt; Manage the Business Manager site &gt; Cartridge Path).",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Business Manager can’t be extended.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a custom cartridge and assign it on the Business Manager cartridge path (Administration &gt; Site Development &gt; Development Setup &gt; Cartridge Path).",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "80": {
      "approach": "",
      "options": [],
      "question": "How can you export a function inside of a controller?",
      "answers": [
        {
          "option": "module.exports = server.exports();",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "server.exports = module.exports();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "server.append = module.exports();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "server.get = module.exports();",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "81": {
      "approach": "",
      "options": [],
      "question": "How can you retrieve a form named formName?",
      "answers": [
        {
          "option": "server.forms['formName']",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "session.forms['formName']",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "A and B are both correct",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "None of the above are correct.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "82": {
      "approach": "",
      "options": [],
      "question": "What is the correct syntax to call the next method inside a controller?",
      "answers": [
        {
          "option": "return next();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "next();",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "this.emit('route:Complete', req, res); return;",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "return;",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "83": {
      "approach": "",
      "options": [],
      "question": "Which methods can validate CSRF tokens?",
      "answers": [
        {
          "option": "validateRequest();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "validateAjaxRequest();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "checkToken();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and B are both correct",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "84": {
      "approach": "",
      "options": [],
      "question": "What type of data do you send from a Controller to the view?",
      "answers": [
        {
          "option": "JSON",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Javascript Object",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Javascript Function",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Middleware",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "85": {
      "approach": "",
      "options": [],
      "question": "What controller do you have to call if you need an anchor text to the homepage?",
      "answers": [
        {
          "option": "Home-Start",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Homepage-Show",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Default-Start",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Home-Show",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "86": {
      "approach": "",
      "options": [],
      "question": "How can you override an existing controller in order to modify some values before current existing code is executed?",
      "answers": [
        {
          "option": "Replace current controller and add needed logic using server.replace",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Appending needed data with server.append",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a new controller and implement needed behaviour.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Prepending needed data with server.prepend",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "87": {
      "approach": "",
      "options": [],
      "question": "What is the correct syntax to render a template inside a Controller?",
      "answers": [
        {
          "option": "res.render('home/homePage');",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "require('dw/template/ISML').renderTemplate('home/homePage');",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "response.renderTemplate('home/homePage');",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "ISML.renderTemplate('home/homePage');",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "88": {
      "approach": "",
      "options": [],
      "question": "What is the purpose of the keyword superModule in the SFRA controller context?",
      "answers": [
        {
          "option": "Inherits the existing server object and extends it with a list of new routes from the super module.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Allows the middleware chain to inherit parent controller functionality.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Imports functionality from the first controller with the same name and location found to the right of the current cartridge on the cartridge path.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "B and C are both correct.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "89": {
      "approach": "",
      "options": [],
      "question": "How can you check the time a controller needs to perform some request?",
      "answers": [
        {
          "option": "By adding in the current controller the profiler class to track spended times.<code>require('dw/system/Profiler').start() and require('dw/system/Profiler').stop()</code>",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Using code profiler in Business Manager.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Using the script debugger.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Adding setTimeout JS function inside the controller.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "90": {
      "approach": "",
      "options": [],
      "question": "How can you send data from the Controller to the rendered view?",
      "answers": [
        {
          "option": "response.setData({...});",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "res.setViewData({...});",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "res.render('...', {...});",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "res.setData({...});",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "e)&nbsp;B and C&nbsp;are correct",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "91": {
      "approach": "",
      "options": [],
      "question": "Check this code and determine why viewData can’t be debugged:<br><pre class=\"prettyprint linenums\">server.get('HelloWorld', function(req, res, next) {\n     viewData = res.getViewData();\n     ...\n});</pre>",
      "answers": [
        {
          "option": "viewData can’t be debugged.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "viewData just should be retrieved by calling res.getData();",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "viewData is not declared.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "B and C are both correct.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "92": {
      "approach": "",
      "options": [],
      "question": "In which scenario would you use Pipeline Profiler against Code Profiler?",
      "answers": [
        {
          "option": "When you need to test the performance of a specific Controller.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "When you are testing the performance of the whole Site and trying to identify bottlenecks.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "You can use both for the same purpose. The unique difference is the way how results are shown.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "When you need to test the performance of jobs.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "93": {
      "approach": "",
      "options": [],
      "question": "On the storefront the user address being displayed is incorrect, it belongs to another customer.How to investigate the root cause?",
      "answers": [
        {
          "option": "Check application logs.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Add breakpoints in JS files",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Adding Logging to Your Scripts",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "All the above are correct.",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "94": {
      "approach": "",
      "options": [],
      "question": "You have a form used in site A. For your site B you’re using the same form but you need to change a form label. How can you do it?",
      "answers": [
        {
          "option": "Create a new ISML file.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a new FORM with a new label.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a new property file with a custom label for site B.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Overwrite forms.properties file with new label.",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "95": {
      "approach": "",
      "options": [],
      "question": "What is the folder hierarchy where locale files should be placed for forms to be used by multiple locales or countries.",
      "answers": [
        {
          "option": "resources/templates/*.properties",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "templates/default/*.properties",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "templates/resources/*.properties",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "resources/forms/*.properties",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "96": {
      "approach": "",
      "options": [],
      "question": "How can you include different address fields, such as state or province, depending on the country for your site forms? You can create different form definitions for each locale… but in which folder hierarchy?",
      "answers": [
        {
          "option": "cartridge/templates/resources/forms/*.xml",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "cartridge/forms/default/*.xml",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "cartridge/resources/forms/*.xml",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "cartridge/templates/resources/forms.xml",
          "correct": false,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "97": {
      "approach": "",
      "options": [],
      "question": "Salesforce B2C Commerce forms can have validations by",
      "answers": [
        {
          "option": "Attributes",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Form Groups",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Functions",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Form Actions",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and B are correct",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "A and C are correct",
          "correct": true,
          "isSelected": false
        }
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "98": {
      "approach": "The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem.",
      "options": [],
      "question": "Which statement correctly adds a log entry?",
      "answers": [
        {
          "option": "Logger.exception(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logger.getErrorLog().log(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logger.fault(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments)",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logger.error(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);",
          "correct": true,
          "isSelected": false
        }        
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "99": {
      "approach": "",
      "options": [],
      "question": "Which three techniques improve client-side performance in production while following documented best practices? (Choose three.)",
      "answers": [
        {
          "option": "Use one style sheet for each ISML decorator template.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Place CSS outside of templates.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Compress CSS",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Use inline Javascript.",
          "correct": true,
          "isSelected": false
        },        
        {
          "option": "Combine several images into a single image.",
          "correct": true,
          "isSelected": false
        }        
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "100": {
      "approach": "A Digital Developer needs to add logging to the following code:",
      "options": [],
      "question": "Which statement logs the HTTP status code to a debug-level custom log file?",
      "answers": [
        {
          "option": " logger.getLogger(‘profile’).debug('Error retrieving profile email, Status Code: ', http.statusCode);",
          "correct": false,
          "isSelected": false
        },
        {
          "option": " logger.debug('Error retrieving profile email, Status Code: {0} was returned.', http.statusCode);",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logger.getLogger().debug('Error retrieving profile email, Status Code: {0} was returned.', http.statusCode);",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Logger.getLogger(‘profile’).debug('Error retrieving profile email, Status Code: {0} was returned.', http.statusCode)",
          "correct": true,
          "isSelected": false
        }                       
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "101": {
      "approach": "",
      "options": [],
      "question": "Which three object types can a developer import using the Merchant Tools > Content > Import & Export module in Business Manager? (Choose three.)",
      "answers": [
        {
          "option": "Content slots",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Images and other static assets",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Products",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Folders",
          "correct": true,
          "isSelected": false
        },                       
        {
          "option": "Content assets",
          "correct": true,
          "isSelected": false
        }                       
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "102": {
      "approach": "Universal Containers recently completed updates to their storefront shopping cart page. A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. Additionally, authenticated users who try to add a coupon are logged out. The following processing code is found in the Cart.js controller file:",
      "options": [],
      "question": "What should the Developer verify to identify the issue?",
      "answers": [
        {
          "option": "The CSRF cartridge is included in the site’s cartridge path.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "The form group has the secure attribute set to true.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "The CSRF token is present in the form and is being submitted in the request.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "The CSRF settings in Business Manager are properly configured.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "103": {
      "approach": "",
      "options": [],
      "question": "A Digital Developer wants to selectively retrieve products and process them from an iPhone. Which action should the Developer take, given that JavaScript controllers CANNOT be used?",
      "answers": [
        {
          "option": "Use import/export in Business Manager.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Create a webservice to retrieve products.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Use OCAPI and invoke it in native language.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Use WebDAV Client to retrieve products.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "104": {
      "approach": "",
      "options": [],
      "question": "A Digital Developer must give users the ability to choose an occasion (holiday, birthday, anniversary, etc.) for which gifts are currently being selected. The data needs to be persistent throughout the current shopping experience. Which data store variable is appropriate, assuming there is no need to store the selection in any system or custom objects?",
      "answers": [
        {
          "option": "Request scope variable",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Page scope variable",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Session scope variable",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Content slot variable",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "105": {
      "approach": "",
      "options": [],
      "question": "A Digital Developer suspects a logical error in a script. Which action will help locate the error?",
      "answers": [
        {
          "option": "Submit a support ticket to B2C Commerce.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Check request logs for evidence of the logical error.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Put breakpoints in the code, debug, and examine variable values.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Print all values in the script node called before the current script.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "106": {
      "approach": "",
      "options": [],
      "question": "Once the Cache Information tool of the storefront toolkit is enabled, how can a Digital Developer view caching information for a particular component of the page?",
      "answers": [
        {
          "option": "Hover over the caching icons now present on the storefront.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Open the Request Logs to view the caching information.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Start a pipeline debugging session and view the caching information provided",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Right-click on the component in UX Studio and view the caching properties of the file",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "107": {
      "approach": "A Digital Developer is working in a sandbox on a site named test-site using the domain test.demandware.net. The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.",
      "options": [],
      "question": "By default, which URL format is a proper Open Commerce API for Sandbox?",
      "answers": [
        {
          "option": "https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "108": {
      "approach": "A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms. In addition, a form field node is in the form XML and the necessary form input is present in the ISML template. The code below is the submit button for the ISML markup.",
      "options": [],
      "question": "By default, which URL format is a proper Open Commerce API for Sandbox?",
      "answers": [
        {
          "option": "Option A",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Option B",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Option C",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Option D",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "109": {
      "approach": "",
      "options": [],
      "question": "Universal Containers is preparing their storefront to use Open Commerce APIs (OCAPI). To which hook should the Digital Developer move taxation logic to ensure consistent order totals within B2C Commerce?",
      "answers": [
        {
          "option": "dw.ocapi.shop.order.validateOrder",
          "correct": false,
          "isSelected": false
        },
        {
          "option": " dw.ocapi.shop.basket.calculate",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "dw.ocapi.shop.basket.afterPostShipment",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "dw.ocapi.shop.order.afterPOST",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "110": {
      "approach": "A digital instance has one site, with one master product catalog separate from the site catalog. Some, but NOT all, products in the master catalog are assigned to categories of the site catalog.",
      "options": [],
      "question": "Using Business Manager, how can a Digital Developer create a catalog export file that contains only the products assigned to the site catalog?",
      "answers": [
        {
          "option": "Use the Catalog Export module to export the site catalog.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Use the Catalog Export module to export the master catalog, with a category-assignment search to export specific products.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "111": {
      "approach": "A Digital Developer is asked to optimize controller performance by lazy loading scripts as needed instead of loading all scripts at the start of the code execution.",
      "options": [],
      "question": "Which statement should the Developer use to lazy load scripts?",
      "answers": [
        {
          "option": "importPackage () method",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "$.ajax () jQuery method",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "local include",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "require () method",
          "correct": true,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "112": {
      "approach": "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web service used in the application and notices that there are too many instances of unavailability.",
      "options": [],
      "question": "Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
      "answers": [
        {
          "option": "Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Change the code that makes the request to set the throwOnError attribute, of the service, to be true",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Increase the web service time out.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Update the external service to have a faster response time.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "113": {
      "approach": "A job executes a pipeline that makes calls to an external system.",
      "options": [],
      "question": "Which two actions prevent performance issues in this situation? (Choose two.)",
      "answers": [
        {
          "option": "Use synchronous import or export jobs",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Configure a timeout for the script pipelet.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Disable multi-threading.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Use asynchronous import or export jobs.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": true,
"isMultiple" : false
    },
    "114": {
      "approach": "Universal Containers sells physical gift cards for the holidays.",
      "options": [],
      "question": "What needs to occur to guarantee the cards will always be available?",
      "answers": [
        {
          "option": "Create an inventory record with an unlimited Allocation value.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create an inventory record with an extremely high Allocation value (i.e., 1 billion certificates).",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a perpetual inventory record.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Create an inventory record with Backorder Handling enabled.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "115": {
      "approach": "Universal Containers wants to associate a region code value with an order to indicate the general area of its destination. This region code must be accessible whenever the order history is displayed.",
      "options": [],
      "question": "What is required to accomplish this?",
      "answers": [
        {
          "option": "Store the region code value in a session variable",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Define a custom attribute on the Order system object type to store the region code value.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Define a custom object type to store the username with the region code.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Store the region code value in the geolocation system attribute of the Order.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "116": {
      "approach": "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:",
      "options": [],
      "question": "How should the Developer change the request?",
      "answers": [
        {
          "option": "Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Change the HTTP method to PUT.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Change the HTTP method to GET.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Include an authentication token in the request.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "117": {
      "approach": "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting.",
      "options": [],
      "question": "Which approach should the Developer use to implement the requirement?",
      "answers": [
        {
          "option": " Implement a ServiceUnavailableException exception handler to execute fallback code",
          "correct": true,
          "isSelected": false
        },
        {
          "option": " Implement a condition that checks to see if the response was empty and execute fallback code if true.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Create a site preference to store timeout settings and implement an IOException handler to execute fallback code",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Use the setTimeout method to execute fallback code if the request has NOT completed.",
          "correct": false,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "118": {
      "approach": "A Digital Developer noticed that cartridges in their workspace are NOT executing. The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection’s target version directory.",
      "options": [],
      "question": "Which action potentially solves this problem?",
      "answers": [
        {
          "option": "Set the active code version to use the latest compatibility mode.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Remove invalid characters from the code version’s name.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Remove invalid characters from cartridge file and folder names.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Set the server connection’s target version directory to the active code version.",
          "correct": true,
          "isSelected": false
        }                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "119": {
      "approach": "A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration:",
      "options": [],
      "question": "Which modification allows the requests to successfully execute?",
      "answers": [        
        {
          "option": "Change the 'resource_id' value to: '/baskets/*/items'.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Change the 'write_attributes' value to: '(+items)'.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Change the 'read_attributes' value to: '(items)'.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Change the 'methods' value to: ['get', 'post'].",
          "correct": true,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "120": {
      "approach": "",
      "options": [],
      "question": "Which two methods are efficient and scalable? (Choose two.)",
      "answers": [        
        {
          "option": "ProductMgr.queryAllSiteProducts()",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "ProductSearchHit.getRepresentedProducts()",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "ProductSearchModel.getProductSearchHits()",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Category.getProducts()",
          "correct": false,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "121": {
      "approach": "Universal Containers calls the following combination of products “The Basics” and sells the combination as a unique product ID:",
      "options": [],
      "question": "The Developer created these three products in the catalog. What is the next step in Business Manager to create “The Basics” as a combination?",
      "answers": [        
        {
          "option": " In the Product Bundles module, create a bundle named “The Basics”.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "In the Products module, create a product named “The Basics” and add the products to the Product Bundles tab.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "In the Products module, create a product named “The Basics” and add the products to the Product Sets tab.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "In the Product Sets module, create a product set named “The Basics”.",
          "correct": false,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
"isMultiple" : false
    },
    "122": {
      "approach": "",
      "options": [],
      "question": "A Digital Developer extends a system object, Product, and adds a Boolean attribute, “sellable,” to it. Assuming “prod” is the variable name handling the product, what code can the Developer use to access it?",
      "answers": [        
        {
          "option": "prod.extended.sellable",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "prod.sellable",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "prod.persistable.sellable",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "prod.custom.sellable",
          "correct": true,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
      "isMultiple" : false
    },
    "123": {
      "approach": "",
      "options": [],
      "question": "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox. Which three items are required to accomplish this task? (Choose three.)",
      "answers": [        
        {
          "option": "Instance Version",
          "correct": false,
          "isSelected": false
        },
        {
          "option": " Instance Hostname",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Business Manager Username",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Keystore Password",
          "correct": true,
          "isSelected": false
        },                                                      
        {
          "option": "Business Manager Password",
          "correct": true,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "124": {
      "approach": "A Digital Developer adds the following line of code to a script.",
      "options": [],
      "question": "The code executes without error; however, the log file on disk does NOT contain the log message. Which two actions should be completed to write the log message to disk? (Choose two.)",
      "answers": [        
        {
          "option": " Ensure that the debug log level is enabled to write to file in the Custom Log Settings Business Manager module.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Archive old log files to make room in the log directory.",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Ensure that the “login” category is added to the Custom Log Filters in the Log Settings Business Manager module.",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Ensure that the debug log level has been added to the custom log level types in the Global Preferences business manager module.",
          "correct": false,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
      "isMultiple" : true
    },
    "125": {
      "approach": "",
      "options": [],
      "question": "Which technical reports datapoint measures the performance of a controller’s script execution if network factors and Web Adaptor processing is ignored?",
      "answers": [        
        {
          "option": "Processing time",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Cache hit ratio",
          "correct": false,
          "isSelected": false
        },
        {
          "option": " Call count",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Response time",
          "correct": false,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
      "isMultiple" : false
    },
    "126": {
      "approach": "",
      "options": [],
      "question": "Which technical reports datapoint measures the performance of a controller’s script execution if network factors and Web Adaptor processing is ignored?",
      "answers": [        
        {
          "option": "Processing time",
          "correct": false,
          "isSelected": false
        },
        {
          "option": "Cache hit ratio",
          "correct": false,
          "isSelected": false
        },
        {
          "option": " Call count",
          "correct": true,
          "isSelected": false
        },
        {
          "option": "Response time",
          "correct": false,
          "isSelected": false
        },                                                      
      ],
      "isAnswered": false,
      "isMultiple" : false
    },
    "127": {
    "approach": "",
    "options": [],
    "question": "Universal Containers needs to have Apple Pay disabled for the country of Spain. Which Business Manager module should the Developer use to meet this requirement?",
    "answers": [
      {
        "option": "Merchant Tools > Ordering > Payment Methods",
        "correct": true,
        "isSelected": false
      },
      {
        "option": "Merchant Tools > Site Preferences > Apple Pay",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "Merchant Tools > Ordering > Payment Processors",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "Merchant Tools > Site Preferences > Payment Types",
        "correct": false,
        "isSelected": false
      }
    ],
    "isAnswered": false,
    "isMultiple": false
  },
  "128": {
    "approach": "",
    "options": [],
    "question": "A Digital Developer has created a new PaymentForm controller that requires communication with the server and must be made using the HTTPS protocol. Which code sample should the Developer use to make sure that HTTPS is used?",
    "answers": [
      {
        "option": "exports.PaymentForm = guard.ensure(['http', 'post', 'loggedIn'], handlePaymentForm);",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "exports.PaymentForm = guard.expose(['post', 'loggedIn'], handlePaymentForm);",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "exports.PaymentForm = guard.httpsPost(handlePaymentForm);",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "exports.PaymentForm = guard.ensure(['https', 'post', 'loggedIn'], handlePaymentForm);",
        "correct": true,
        "isSelected": false
      }
    ],
    "isAnswered": false,
    "isMultiple": false
  },
  "129": {
    "approach": "",
    "options": [],
    "question": "Universal Containers requires that a new order comments attribute is added to the existing SiteGenesis checkout flow. This new attribute needs to be included as part of the standard order export. Aside from updating the HTML markup and form definition, which option contains all necessary steps to achieve this task?",
    "answers": [
      {
        "option": "Add the new attribute to the 'Order' system object. Modify the 'COPIaceOrder' controller to add this new attribute to the current session's 'Order' object.",
        "correct": true,
        "isSelected": false
      },
      {
        "option": "Modify the 'COPIaceOrder' controller to update a CSV file in the IMPEX WebDAV directory with the order ID and comments. Modify the order export process to read information in the CSV file and include it as part of the export.",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "Add the new attribute to the 'Customer' system object. Modify the 'COPIaceOrder' controller to add this new attribute to the current session's 'Customer' object.",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "Create a new custom object type for order comments that contains the attributes: order ID and comments. Modify the 'COPIaceOrder' controller to create a new order comments custom object upon order completion.",
        "correct": false,
        "isSelected": false
      }
    ],
    "isAnswered": false,
    "isMultiple": false
  },
  "130": {
    "approach": "",
    "options": [],
    "question": "Which code sample is required to use a custom tag provided in SiteGenesis in an ISML template?",
    "answers": [
      {
        "option": "Option A",
        "correct": true,
        "isSelected": false
      },
      {
        "option": "Option B",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "Option C",
        "correct": false,
        "isSelected": false
      },
      {
        "option": "Option D",
        "correct": false,
        "isSelected": false
      }
    ],
    "isAnswered": false,
    "isMultiple": false
  },
  "131": {
  "approach": "",
  "options": [],
  "question": "Universal Containers wants to change a content slot that is currently configured to display a content asset. Now they want the slot to display the top five selling boxes for the week. Which two changes need to be made for this to occur? (Choose two.)",
  "answers": [
    {
      "option": "Change the slot’s configuration content type to 'products.'",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Change the slot’s configuration content type to 'recommendations.'",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Change the slot’s configuration template to the appropriate rendering template.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Delete the existing content asset.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"132": {
  "approach": "",
  "options": [],
  "question": "A Digital Developer has a site export file on their computer that needs to be imported into their sandbox. How should the developer update their sandbox with the data in this file?",
  "answers": [
    {
      "option": "Connect and import the file using the remote option within the Site Import & Export Business Manager module.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Upload and import the file using the local option within the Site Import & Export Business Manager module.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Upload the file to the Impex WebDAV directory and import using the Site Import tool within UX Studio.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Upload the file to the Static WebDAV directory and import using the Import & Export Business Manager module.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"133": {
  "approach": "",
  "options": [],
  "question": "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it is written. What must be done in order to use the debugger with the new controller when it is written?",
  "answers": [
    {
      "option": "Create and use a new script debug configuration.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Use the existing pipeline debugger.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Modify the debugger configuration and use the existing pipeline debugger.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create and use a new controller debug configuration.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"134": {
  "approach": "",
  "options": [],
  "question": "An instance has custom logging enabled. The log reaches the file size limit. What happens in this situation?",
  "answers": [
    {
      "option": "The log file is deleted and a new log file is created.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Logging is suspended for the day.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "The current log file is archived and a new log file is created.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The log file rolls over and the oldest log messages are overwritten.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"135": {
  "approach": "",
  "options": [],
  "question": "A developer has the following files in template/resources: account.propierties weight.unit=kilos account_en.propierties weight.unit=stones account_en_US.propierties weight.unit= pounds Using the default locale configuration, what is the current outcome of the page that renders the account.isml template snippet below when visiting the storefront with the English for Canada (en_CA) locale? 'Your parcel weighs 10 ${Resource.msg('weight.unit','account')}'",
  "answers": [
    {
      "option": "Your parcel weighs 10 stones.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Your parcel weighs 10 pounds.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Your parcel weighs 10 undefined.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Your parcel weighs 10 kilos.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"136": {
  "approach": "",
  "options": [],
  "question": "A client has custom object definition and requirement that occasional data changes in staging also need to exist in production. Which task should the developer perform to meet these requirements when setting up the custom object?",
  "answers": [
    {
      "option": "Create two copies of the custom object in staging and set Sharing = True.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create the custom object definition in staging as Shared.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create the custom object definition in production as Replicable.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create the custom object definition in staging as Replicable.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"137": {
  "approach": "",
  "options": [],
  "question": "A developer is asked to write a log containing the ID and name of the product with a variable named myProduct. Which snippet of code should be used?",
  "answers": [
    {
      "option": "Logger.warn('The current producto is {0} with name {1}', myProduct.getID(), myProduct.getName());",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Logger.warn('The current producto is {0} with name {1}'), context(myProduct.getID(), myProduct.getName());",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Logger.warn('The current producto is ${myProduct.getID()} with name ${myProduct.getName()}');",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Logger.warn('The current producto is %s with name %s'), context(myProduct.getID(), myProduct.getName());",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"138": {
  "approach": "",
  "options": [],
  "question": "Business Manager has the configuration: Active log category is 'root' Log level of INFO The code below executes: Var log = Logger.getLogger('products','export'); Log.info ('This is important information'); Using this information, what is the beginning of the filename in which the log will be written?",
  "answers": [
    {
      "option": "custom-export",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "custom-products",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "products",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "info-export",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"139": {
  "approach": "",
  "options": [],
  "question": "Given the requirements: To integrate with an external web service using HTTP requests To create a service for this purpose with the Service framework using the LocalServiceRegistry class. To test the service before the external service provider makes the API available. Which solution allows the developer to satisfy the requirements?",
  "answers": [
    {
      "option": "Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a service and implement the mockFill callback and set the service mode to mock.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Create a service and a Sitepreference that induce the service to respond with a mock response using a conditional.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"140": {
  "approach": "",
  "options": [],
  "question": "A developer needs to update the package.json file so that it points to the hook file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?",
  "answers": [
    {
      "option": "{ “hooks”: “./cartridge/scripts/hooks.json” }",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "{ “hooks”: “./scripts/hooks.json” }",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "{ hooks: “./cartridge/scripts/hooks.json” }",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "{ hooks: ./scripts/hooks.json }",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"141": {
  "approach": "",
  "options": [],
  "question": "Given the following snippet: Server.append( ‘Show’ , function (req, res, next)). According to SFRA, which two options shows a correct way to complete the code above in order to provide data to the response using a controller? (Choose 2 answers)",
  "answers": [
    {
      "option": "res.viewData = { data: myDataObject }; res.render(‘/content/myPage’); next(); });",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "res.setViewData ({ data: myDataObject }); res.render(‘/content/myPage’); next(); });",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "res.render(‘/content/myPage’, { data: myDataObject }); next(); });",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "res.render(‘/content/myPage’); next(); }).append{( Data:myDataObject });",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"142": {
  "approach": "",
  "options": [],
  "question": "Given the code snippet above, what should be added after this code so it can be used for page component display?",
  "answers": [
    {
      "option": "Base.render = render;",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Module.exports.render = render;",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Module.exports = render;",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Module.exports = server.exports();",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"143": {
  "approach": "",
  "options": [],
  "question": "A developer has a specification to integrate with a REST API for retrieving traffic conditions. The service expects parameters to be form encoded. Which service type should the developer register?",
  "answers": [
    {
      "option": "HTML Form",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "SOAP Form",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "POST Form",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "HTTP Form",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"144": {
  "approach": "",
  "options": [],
  "question": "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories. Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
  "answers": [
    {
      "option": "Create a Synonym Dictionary entry: car accessories, household, technology. Use search mode Exact Match.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology. Use search mode Exact Match.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a Synonym Dictionary entry: car accessories, household, technology. Use search mode First Word.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a Common Phrase Dictionary entry: car accessories. Use search mode Exact Match.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"145": {
  "approach": "",
  "options": [],
  "question": "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned. Given the above requirement, where should the developer create that partition in Business Manager?",
  "answers": [
    {
      "option": "Administration > Sites > Manage Sites > Site > Cache",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Operations > Site > Manage Sites > Cache",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Operations > Cache > Site",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Site > Site Preferences > Cache",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"146": {
  "approach": "",
  "options": [],
  "question": "Given the following ISML example, how should a developer reference the product object in the current iteration of the basket? \n <isloop ítems =”${pdict.Basket.products}” var=”product” status= “loopstatus”> \n …  \n </isloop> ",
  "answers": [
    {
      "option": "product ",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "pdict.Basket.products{loopstatus} ",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "loopstatus.product",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "pdict.product",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"147": {
  "approach": "",
  "options": [],
  "question": "A client that sells to multiple countries in Europe needs to disable Apple Pay for Denmark. Which Business Manager module is used to achieve this requirement?",
  "answers": [
    {
      "option": "Locale Payments ",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Payment Methods",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Payment Processors",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Apple Pay",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"148": {
  "approach": "",
  "options": [],
  "question": "A developer set up a new site with Taxation: Net. However, the business requirements changed and the site now needs to be Taxation:Gross. The Business Manager interface does not give this option. Which sequence of steps is necessary to change the site to gross taxation?",
  "answers": [
    {
      "option": "Make sure that the developer has “Administrator” Access, then change the Taxation setting to Gross ",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Unlock the site preferences and then change the Taxation setting to Gross",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Change the global setting,”Enable Taxation Methods” to true, then change the Taxation setting to Gross",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a new site with Taxation set to Gross, then delete the old site",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"149": {
  "approach": "The controller endpoint code snippet above does not work.",
  "options": [],
  "question": "Which line of code should the developer use to replace line 6 and correct the problem?",
  "answers": [
    {
      "option": "next()",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "return res;C. res.next();",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "req.next();",
      "correct": false,
      "isSelected": false
    }    
  ],
  "isAnswered": false,
  "isMultiple": false
},
"150": {
  "approach": "",
  "options": [],
  "question": "A developer is working on a new site for the U.S based on an existing Canadian site. One of the requirements is a change to the address form. The current Canadian form has an <options> list with the correct two-letter abbreviation for the provinces. The U.S. requirements are to: • Have an <options> list with the correct two-letter abbreviation for the states in place of the province field. • Set the U.S site locale. • Add the options list field definition to the XML file. How should the developer set up the files before making the required edits?",
  "answers": [
    {
      "option": "Create a copy of existing address.xml file in the default folder. Rename that file to address_US.xml",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a new sub-folder in the forms folder. Name it US. Copy existing address.xml file in the new folder.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a copy of existing address.xml file in the default folder. Rename that file to address_en_US.xml",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a new sub-folder in the forms folder. Name it en_US. Copy existing address.xml file in the new folder.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"151": {
  "approach": "",
  "options": [],
  "question": "A merchant has a content slot on a page that currently displays products based on the top Sellers for the current week. They wish to change this functionality and, instead, have the slot render a specific content asset so that the content experience is more personalized to the visitors. Which two actions are necessary to make this change? (Choose 2 answers)",
  "answers": [
    {
      "option": "Delete the existing content slot and create a new one.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Change the rendering template in the slot configuration.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Change the default setting in the slot configuration.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Change the content type for the slot configuration.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"152": {
  "approach": "",
  "options": [],
  "question": "Given a file in a plug-in cartridge with the following code: 'use strict': Var base = module.superModule; Function applyCustomCache (req,res,next){ res.CachePeriod = 6; //eslint-disable-line no-param-reassign res.cachePeriodUnit = ‘hours’) //eslint-disable-line no-param-reassign next(); } Module.exports = base; Module.exports.applyCustomCache = applyCustomCache; What does this code extend?",
  "answers": [
    {
      "option": "A controller",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "A middleware script",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "A decorator",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "A model",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"153": {
  "approach": "",
  "options": [],
  "question": "A developer has custom debug statements in a script, but the messages are not showing up in the Storefront Toolkit Request Log. Which step needs to be completed to get the messages to appear in the Request Log?",
  "answers": [
    {
      "option": "In Global preferences, check the box for Enable custom logging in Request Log.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "In Site Preferences, check the box for Enable custom Logging in Request Log.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "In Custom Log Settings, check the DEBUG box for Select Log Levels Written to Files.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "In Custom Log Settings, activate the logging category at DEBUG level.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"154": {
  "approach": "Below is a form definition snippet from the newsletter.xml file:",
  "options": [],
  "question": "A developer has custom debug statements in a script, but the messages are not showing up in the Storefront Toolkit Request Log. Which step needs to be completed to get the messages to appear in the Request Log?",
  "answers": [
    {
      "option": "In Global preferences, check the box for Enable custom logging in Request Log.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "In Site Preferences, check the box for Enable custom Logging in Request Log.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "In Custom Log Settings, check the DEBUG box for Select Log Levels Written to Files.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "In Custom Log Settings, activate the logging category at DEBUG level.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"155": {
  "approach": "A merchant requires that an existing section of the Site become editable from the Business Manager, so that they can modify it independently of the developer.",
  "options": [],
  "question": "Which of these is an important factor for a developer to consider when choosing the appropriate solution between a content slot and a Page Designer component?",
  "answers": [
    {
      "option": "Only Page Designer Components can be localized for different languages.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Only content slot configurations can be tied to campaigns.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Only page Designer components can ve tied to campaigns.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Only content slot configurations can ve localized for different languages.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"155": {
  "approach": "Given a job step configured in the steptype.json, a developer needs to add a custom status code “No_FILES_FOUND”.",
  "options": [],
  "question": "Which code snippet will complete the requirement?",
  "answers": [
    {
      "option": " var status = {success: ‘OK’. Message: ‘NO_FILES_FOUND’}; return status;",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "var status = require(‘dw/system/status’); return new Status(Status.OK, ‘NO_FILES_FOUND’);",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "this.status = ‘NO_FILES_FOUND’ return this;",
      "correct": false,
      "isSelected": false
    },
    {
      "option": " return ‘NO_FILES_FOUND",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"156": {
  "approach": "",
  "options": [],
  "question": "A merchant has this three-tier category structure setup in the Storefront catalog: New Arrivals > Women > Clothing. The category named Clothing has all the clothing items for Women and is merchandised. A Search Refinement named Newness is correctly configured for the Clothing category. When a merchandiser views the Clothing category, the Search Refinement appears and works as expected. However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search. What is the Reason?",
  "answers": [
    {
      "option": "There are conflicting Search Refinement definitions for Clothing and one of its parent categories.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The Search Refinement definition is not set up for the Women category.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The Search Refinement definition is not set up for the New Arrivals Category.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The Search Refinement definitions is not set up for the Root Category.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"157": {
  "approach": "",
  "options": [],
  "question": "Given the customer basket described below: • A customer has an existing basket that consists of multiple items. • One of the items is identified as a gift ítem by an attribute at the product line ítem. The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. If the basket contains any gift items, modify the basket and create a separate shipment for the gift item. Four hooks are required to make the modification, beginning with modifyGETRespone and ending with validatebasket. • Dw.ocapi.shop.basket.modifyGETResponse • -- missing hook – • -- missing hook -- • dw.ocapi.shop.basket.validateBasket. What are the two missing hooks in the middle?",
  "answers": [
    {
      "option": "dw.ocapi.shop.basket.shipment.afterDELETE",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "dw.ocapi.shop.basket.shipment.beforePATCH",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "dw.ocapi.shop.basket.shipment.beforeDELETE",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "dw.ocapi.shop.basket.shipment.beforePOST",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"158": {
  "approach": "",
  "options": [],
  "question": "A merchant has a requirement to render personalized content to a category page via a Content Slot that targets VIP high-spending customers during a specific promotional period. Which two items should the developer create to achieve the specified requirements? (Choose 2 answers)",
  "answers": [
    {
      "option": "VIP Customer Group",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Page Template",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Slot Configuration",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Rendering Template",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"159": {
  "approach": "",
  "options": [],
  "question": "Given the following conditions: • Site export file with a copy of the Storefront data for a custom site • Sandbox with the custom site code, but no Storefront data • Requirement for a working copy of SFRA for development reference A developer is assigned the following Business manager tasks: A. Import the custom Site using Site Import/Export B. Import the SFRA Demo Sites using Site Import/Export C. Rebuild the custom Site search indexes. In what sequence should the developer perform the tasks, so that the custom Site displays the products as intended?",
  "answers": [
    {
      "option": "Task A, then C, then B",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Task B, then C, then A",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Task A, then B, then C",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Task B, then A, then C",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"160": {
  "approach": "",
  "options": [],
  "question": "A developer is given a task to implement a new Page Designer layout component that doesn’t accept certain asset components. How should the developer achieve the above task?",
  "answers": [
    {
      "option": "Add component_type_inclusion in the layout json configuration.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Add component_type_exclusions in the layout json configuration.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Add layout_type_inclusion in the target components json configurations.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Add layout_type_exclusion in the other asset components json configuration.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"161": {
  "approach": "",
  "options": [],
  "question": "The developer created a new Storefront category in storefront-catalog-m-en, but when viewing the Storefront site, the category is not visible. What are two possible reasons?",
  "answers": [
    {
      "option": "The Storefront catalog is offline.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The category does not contain available products.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "The category is not sorted.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The category is offline.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"162": {
  "approach": "",
  "options": [],
  "question": "A client sells its product in single-brand stores as well as in multi-brand stores. When shown in the store locator list, the client wants the single-brand stores to have a particular background color to highlight them. Which Business Manager action should be completed to allow the developer to apply different styling to the single-brand stores?",
  "answers": [
    {
      "option": "Add a Boolean custom attribute to the Store system object.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Configure the existing Store custom object type definition.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a new SingleBrandStore custom object configuration.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Adjust the relevant Site Preference in the Stores group.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"163": {
  "approach": "",
  "options": [],
  "question": "A developer wants to add a link to the My Account Page. What is the correct code to accomplish this?",
  "answers": [
    {
      "option": "<a href='${URLUtils.get('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "<a href='${url.get('Account-Show')}>${Resource.message('myaccount')}</a>",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "<a href='${URLUtils.url('Account-Show')}>${Resource.msg('myaccount','account',null)}</a>",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "<a href='${URLUtils('Account-Show')}>${ResourceMgr.getProperties('myaccount','account',null)}</a>",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"164": {
  "approach": "",
  "options": [],
  "question": "Given a NewsletterSubscription custom object that has a key attribute named email of type String, what is the correct syntax to create the NewsletterSubscription custom object and persist it to the database?",
  "answers": [
    {
      "option": "Var customobject = dw.object.CustomObjectMgr.createNewsletterSubscription('email', newsLetterForm.email.value);",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Var customobject = dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value, 'NewsletterSubscription');",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Var customobject = dw.object.CustomObjectMgr.createCustomObject('NewsletterSubscription', newsLetterForm.email.value);",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Var customobject = dw.object.CustomObjectMgr.createCustomObject('NewsletterSubscription','email', newsLetterForm.email.value);",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"165": {
  "approach": "",
  "options": [],
  "question": "A developer must configure permissions for an Open Commerce API resource on a sandbox instance that currently does not have any permissions configured. Which two configuration properties are required to enable Access to the resource? (Choose 2 answers)",
  "answers": [
    {
      "option": "Resource_id",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Read_attributes",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Client_id",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Version_range",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"166": {
  "approach": "",
  "options": [],
  "question": "A developer is importing edits for two different sites into the same sandbox, and is provided with four different files. Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules? (Choose 2 answers)",
  "answers": [
    {
      "option": "System type extensions (solo en Sites)",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Site Jobs (sites)",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Search Settings (en search y en Sites)",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Promotions (en sites y en online marketing)",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"167": {
  "approach": "",
  "options": [],
  "question": "In order to build the SFRA code to a developer sandbox for the first time, which build steps should the developer perform for the site to appear and function as designed?",
  "answers": [
    {
      "option": "npm run compile:js, npm run compile:html, npm run clean",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "npm run compile:scss, npm run compile:html, npm run clean",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "npm run compile:js, npm run compile: scss, npm run compile:html",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "npm run compile:js, npm run compile:scss, npm run compile:fonts",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"168": {
  "approach": "",
  "options": [],
  "question": "A client uses tax tables in Business Manager to calculate tax. They recently started shipping to a new country, Italy, and the tax is not being calculated correctly on the Storefront. What is the likely problem?",
  "answers": [
    {
      "option": "Tax Region is configured wrong.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Tax Country is missing.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Tax Jurisdiction is missing.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Tax Locale is configured wrong.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"169": {
  "approach": "",
  "options": [],
  "question": "A developer wants to use an external application to manage their stores information (such as opening hours, and so on), and see their changes in their B2C Commerce Staging instance as soon as they are saved. What is the appropriate technique the developer should perform to allow the merchant to create a new store in this scenario?",
  "answers": [
    {
      "option": "A POST request to the Stores Data OCAPI.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "A PUT request to the Stores Data OCAPI.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "A PATCH request to the Stores Data OCAPI.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "An UPDATE request to the Stores Data OCAPI.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"170": {
  "approach": "",
  "options": [],
  "question": "Given the requirements: To show the washing instructions for a clothing product on a dedicated section the detail page. Washing instructions come from the product information manager (PIM). To have this attribute available to localize in the Storefront. Which action meets these requirements?",
  "answers": [
    {
      "option": "Set the product system object type as localizable.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Add a resource file for every locale for which the attribute needs to be translated.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Set the custom attribute as localizable.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Add a custom attribute for each locale.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"171": {
  "approach": "",
  "options": [],
  "question": "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all times. How can a developer use Business Manager to ensure that the gift vouchers are always available?",
  "answers": [
    {
      "option": "Check the perpetual flag in the product inventory record.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Check the Available to Sell (ATS) flag for the product set.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Set StockLevel = maxAllocation for the product.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Manually set the inventory to a high number.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"172": {
  "approach": "A developer wants to create in Business Manager extension with the cartridge named plugin_vm_extension.",
  "options": [],
  "question": "Which two steps should the developer take for the extension option to show up in Business Manager?Choose 2 answers:",
  "answers": [
    {
      "option": "Add plugin_bm_extension to the cartridge path under business manager cartridge site",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Add the appropiate roles and permission to the user to view the business manager extension",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Add plugin_bm_extension to the cartridge path under Storefront cartridge site path",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Activate a new code version for the Business Manager Site",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"173": {
  "approach": "",
  "options": [],
  "question": "A developer is asked to improve the maintainability of a page by reducing its code repetition. What are two techniques the developer should implement to achieve this? (Choose 2 answers)",
  "answers": [
    {
      "option": "Require and render templates with <isscript> tags",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use local template includes",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Implement template decorators paired with replace tags",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Embed partial files using ISML expressions",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"174": {
  "approach": "",
  "options": [],
  "question": "To ensure SFRA best practices and protect against request forgery, the developer introduced CSRF token generation in the customer address form: \n <form … action='submit'> \n <input name='${dw.web.CSRFProtection.getTokenName()}' \n value='${dw.web.CSRFProtection.generateToken()}'> \n ... \n <the rest of the Form fields> \n ... \n </form> To implement CSRF protection when the form is submitted, the developer needs to introduce the CSRF validation using one or both of these methods as applicable: • validateRequest • validateAjaxRequest. Where in the code does the developer need to add this CSRF validation check?",
  "answers": [
    {
      "option": "In the controller function that displays the form",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "In the middleware chain of the controller post route",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "In the controller function that handles the submitted form",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "In the model function that persists the form data",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"175": {
  "approach": "",
  "options": [],
  "question": "A developer has a sandbox configured with a service and its profile and credential. Now there is a requirement to allow changes to the service URL manually from the sandbox. Which B2C feature should the developer use to achieve the request?",
  "answers": [
    {
      "option": "Use the service credential URL field",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Use the service status area, set the override URL checkbox, and then populate the URL field with the required one.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use a Sitepreference dedicated for the service URL",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use a Globalpreference dedicated for the service URL",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"176": {
  "approach": "When inspecting the weekly service status report for a critical internally hosted web service used in the application, a developer notices that there are too many instances of unavailability.",
  "options": [],
  "question": "Which two solutions can reduce the unavailability of the service? Choose 2 answers.",
  "answers": [
    {
      "option": "Update the service to have a faster response time",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Modify the code that makes the request to the external service to be wrapped in a try/catch block",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Increase the web service time out",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Change the code that sets the throwOnError attribute of the service to be true.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"177": {
  "approach": "A merchant has a requirement to sell a combination of four existing products with a unique product ID. This collection will be known as ‘Our Top Combo’, and is base don the merchant’s trading information that shows this combination to be in high demand",
  "options": [],
  "question": "What does the developer need to do next to fulfill this requirement?",
  "answers": [
    {
      "option": "Create a unique produce to called ‘Our Top Combo’ and add the four products into the Product Bundles tab.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Create a Content Slot with Content Type = Product and add the four component products into that slot.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": " Create a Product Set called ‘Our Top Combo’ and add the products into the set.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Create a recommendation rule associating the four products as a recommendation group.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"178": {
  "approach": "A Newsletter controller contains the following route:",
  "options": [],
  "question": "Assuming the Custom Object metadata exists, why does this route fail to render the newsletter template when the subscription form is correctly submitted?",
  "answers": [
    {
      "option": "Custom Objects can only be created by Job scripts",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The Subscribe route is missing the server.middleware.httpt middleware.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The CustomObjectMgr variable should be declare outside of the route.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "The Custom Object creation is not wrapped in a Transaction.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"179": {
  "approach": "",
  "options": [],
  "question": "Which three configuration does a developer need to ensure to have a new product visible in the Storefront? (Choose 3 answers)",
  "answers": [
    {
      "option": "The product has a Price",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The Storefront catalog that contains the product is assigned to a site",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "The product has a master product",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The product is online and searchable",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "The search index is built.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"180": {
  "approach": "",
  "options": [],
  "question": "Which two items are appropriate content of custom logs implemented at checkout? (Choose 2 answers)",
  "answers": [
    {
      "option": "Customer’s password at post-checkout sign up",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Order failure information",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Transaction’s credit card information",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Payment gateway service response code",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"181": {
  "approach": "",
  "options": [],
  "question": "A developer is writing a server side script that needs to maintain state across calls. The persistent information needed includes these items: • The current customer • Whether or not the customer is authenticated • The privacy attributes (such as tracking consent or cookie policy). Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?",
  "answers": [
    {
      "option": "Use a non-replicable Custom Object to store the information temporarily.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use the Session class in the B2C Commerce api.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Use an SFRA controller, because it runs server-side, the state is automatically maintained",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use a client-side cookie to store the information for the session duration.",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"182": {
  "approach": "",
  "options": [],
  "question": "A developer working on a simple web service integration is asked to add appropriate logging to allow future troubleshooting. According to logging best practices, which code should the developer write to log when an operation succeeds, but has an unexpected outcome that may produce side effects?",
  "answers": [
    {
      "option": "Logger.info('Unexpected service response')",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Logger.debug('Unexpected service response')",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Logger.error('Unexpected service response')",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Logger.warn('Unexpected service response')",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"183": {
  "approach": "",
  "options": [],
  "question": "Which three operations should be done in a controller? (Choose 3 answers)",
  "answers": [
    {
      "option": "Generate the response as JSON or HTML",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Use the Script API to generate data for the view.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use middleware functions when applicable",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Create a plain JavaScript object representing a system object",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Use the model needed for the view.",
      "correct": true,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": true
},
"184": {
  "approach": "",
  "options": [],
  "question": "A Storefront is designed so that multiple pages share a common header and footer layout. Which ISML tag should a developer use on the templates for these pages to avoid code repetition in the most effective way?",
  "answers": [
    {
      "option": "<isdecorate> … </isdecorate>",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "<iscontent> … </iscontent>",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "<isreplace> … </isreplace>",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "<isinclude> … </isinclude>",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"185": {
  "approach": "",
  "options": [],
  "question": "A retailer notices that the Account Addresses page is showing the wrong shopper’s address. Which tool should the developer start with to identify the issue?",
  "answers": [
    {
      "option": "Pipeline profiler",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Code Profiler",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Storefront Toolkit",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Reports and Dashboards Module",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"186": {
  "approach": "A client has two B2C Commerce sites in the same instance: one for the U.S market, the other for the European market. The products they make are sold with different safety certificates based-on the world location. For example, they sell a smartphone with certificate A in the U.S and certificate B in Europe, a hairdryer with certificate C in the U.S and certificate D in Europe, and more. ",
  "options": [],
  "question": "How should a developer allow the merchant to display the appropriate certification logo in the produce to details page, depending on the customer’s location? ",
  "answers": [
    {
      "option": "Add a Localizable custom attribute to the Certificate system object type",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Ad and Image custom preference to the Sitepreference system object type ",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Add a Site-specific custom attribute to the Product system object type",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "D.	Add a Localizable custom preference to the SitePreference system object type",
      "correct": false,
      "isSelected": false
    }
  ],
  "isAnswered": false,
  "isMultiple": false
},
"187": {
  "approach": "",
  "options": [],
  "question": "Which item is appropriate content for custom logs implemented at checkout?",
  "answers": [
    {
      "option": "Order failure information",
      "correct": true,
      "isSelected": false
    },  
    {
      "option": "Transaction's credit card information",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Customer's password at post-checkout sign-up",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"188": {
  "approach": "A developer needs to perform the same additional checks before completing multiple routes in custom controller, in order to decide whether to render a template or redirect the user to a different page.",
  "options": [],
  "question": "According to SFRA best practices, what is the correct approach to improve code reusability in this scenario?",
  "answers": [
    {
      "option": "Append a new function to all the existing routes with the server module",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Define a new middleware function and use it In the exlstlng routes.",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "use the superNoduIe property in the existing routes to extend their functionality.",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"189": {
  "approach": "Given the requirements:",
  "options": ["•	To integrate with an external web service using HITP requests", "•	•	To create a service for this purpose With the Service  framework using the Loc—IServiceRegistry class", "•	To test the service before the external service provider makes the API available"],
  "question": "Which solution allows the developer to satisfy the requirements?",
  "answers": [
    {
      "option": "Create a servlce and e Sltepreference that Induce the service to respond With a mock response using a conditional.",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Create a service and implement the mockFuII callback and a sitepreference to enable or disable the mock response.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create a service and Implement the mockFull callback and set the service mode to mock.",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"190": {
  "approach": "",
  "options": [],
  "question": "Given the following Open Commerce API (OCAPI) definitions, which permission or permissions apply?",
  "answers": [
    {
      "option": "Allows external applications to create coupons",
      "correct": true,
      "isSelected": false
    },  
    {
      "option": "Allows external applications to create, update, and delete coupons",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Allow external applications to create, update, and delete both coupons end coupon codes",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"191": {
  "approach": "A developer implements the necessary code for a new page Designer component",
  "options": [],
  "question": "What is the purpose Of the JSON metadata definition file the  developer creates?",
  "answers": [
    {
      "option": "It defines the business and rendering logic Of the component required by the merchant",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "It defines the responsive layout of the rendered template",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "It defines regions within the component type",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"192": {
  "approach": "A developer customized the Cart-Show controller route with  LINK cartridge that adds soclel medla data. There is a new requirement to add a dateLayer object to the Cert-Show controller route",
  "options": [],
  "question": "How should the developer achieve this to ensure that no code change will be needed if the client decides to remove the LINK cartridge ?",
  "answers": [
    {
      "option": "Append Cart-Show controller route in the client cartridge and add dataLeyer object to the vlewData variable",
      "correct": true,
      "isSelected": false
    },  
    {
      "option": "Replace the Cart-Show controller route in client cartridge ane add datal-Byer Object to the viewData variable. Ensure that the client cartridge is on the left of the LINK cartridge in cartridge path",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Replace the Cart-Show controller reute In 'Ilene cartridge and add dat2Layer Object to the ViewData variable.",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"193": {
  "approach": "The developer created new Storefront category in storefrontcatalog-m-en, but when viewing the Storefront site, the category isn't vlslble",
  "options": [],
  "question": "Which reason might explain Why the category isn't Visible?",
  "answers": [
    {
      "option": "The categories are not sorted",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "The Storefront catalog Is offline",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The category doesn't contain avallable products",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"194": {
  "approach": "A developer has a sandbox with code to log a message during execution, and the following code:",
  "options": [],
  "question": "After the code executes, the developer doesrft see any log file With the message in the WebDAV folder. What should the developer do to correct this issue?",
  "answers": [
    {
      "option": "Set the logging global preference to true AND check the box for Info under Log Files. ",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Set the logging global preference to true AND set the root log level to debug",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Set the root log level to debug AND check the box for Info under Log Files",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"195": {
  "approach": "The developer has been given the following business requirement",
  "options": ["•	The shipping method, 'Free Standard Ground Shipping' has an exclusion for products with 'category equals or Is child Of electronics-televisions.'", "•	The marketing department has scheduled sale offering  'Free Standard Ground Shipping' method for brand XyzTv televisions for the next 3 months."],
  "question": "What method accomplishes this While following best practices?",
  "answers": [
    {
      "option": "Extend the code In cartridge/models/shi pping/sh ipping Meth js using module.superModuIe and add an exception for the specified brand.",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Extend the CheckoutShippingServices controller using module-super-Module and add an exception for the speclfled brand,",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Create an allow list for the existing shipping method by adding a product exclusion for 'brand equals Xy2Tv' to the exclusion list for 'Free Standard Ground Shipping'.",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"196": {
  "approach": "Below is a form definition snippet from the newsletter.xml file",
  "options": [],
  "question": "Which line of code creates a JSON object to contain the form data?",
  "answers": [
    {
      "option": "server.form.getForm('newsletter');",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "server.forms.getForm('newsletter');",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "server.form.getForm('dwfrm_newsletter');",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"197": {
  "approach": "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these dlgltal vouchers, this Item should be available to sell at all times",
  "options": [],
  "question": "How can a developer use Business Manager to ensure that the gift vouchers are always available?",
  "answers": [
    {
      "option": "Check the perpetual flag in the product inventory record.",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Set Stockl_evel = mexAllocation for the product",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Manually set the inventory to a high number",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"198": {
  "approach": "A developer wants to edd a link to the My Account page",
  "options": [],
  "question": "Whet Is the correct code to accomplish this?",
  "answers": [
    {
      "option": "<a href='${URLUtils.url('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
      "correct": true,
      "isSelected": false
    },  
    {
      "option": "<a href='${URLUtils('Account-Show')}>ResourceMgr.getProperties('myaccount','account'</a>",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "<a href='${URLUtils.get('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"199": {
  "approach": "",
  "options": [],
  "question": "Given template rendered by a controller with caching and a remote include without caching, which situation applies?",
  "answers": [
    {
      "option": "The remote include portion is not cached, but the rest of the page is cached",
      "correct": true,
      "isSelected": false
    },  
    {
      "option": "The page Is cached only for returning customers because Of the remote Include",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "The page is not cached because the remote include introduces an uncached portion.",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"200": {
  "approach": "A merchant has content slot on page that currently displays products based on the top sellers for the current week. The merchant wants to change this functionality, They want to have the slot render a specific content asset so that the content experience is more personalized to the Visitors",
  "options": [],
  "question": "Which two actions are necessary to make this change?",
  "answers": [
    {
      "option": "Change the rendering template in the slot configuration AND delete the existing content slot to create a new one.",
      "correct": true,
      "isSelected": false
    },  
    {
      "option": "Change the content type AND change the rendering template in the slot configuration.",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Change the default setting AND change the rendering template in the slot configuration",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"201": {
  "approach": "A developer is asked to improve a page's maintainability by reducing its code repetition",
  "options": [],
  "question": "Which technique should the developer implement to achieve this?",
  "answers": [
    {
      "option": "Embed partial files using ISML expressions",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Implement template decorators paired with replace tags",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "Require and render templates With <isscript> tags",
      "correct": false,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"202": {
  "approach": "A client has a requirement to allow users on the Storefront to filter by a newly created attribute",
  "options": [],
  "question": "After creating the search refinement, What else is necessary to achieve this?",
  "answers": [
    {
      "option": "Change the productSearchRefinementbar template",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Set the attribute as Searchable",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "Ensure the attribute has date and is indexed",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"203": {
  "approach": "Business Manager has the configuration:",
  "options": ["•	Active Log category is 'root'", "•	Log level of WARN"],
  "question": "The code below is executing: var log —  Logger.getLogger('products') using this information, What Will be written to the log",
  "answers": [
    {
      "option": "log.info('This is warn message')",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "log.error('This is warn message') AND log.info('This is info message')",
      "correct": false,
      "isSelected": false
    },
    {
      "option": "log.warn('This is warn message') AND log.warn('This is warn message')",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": false
},
"204": {
  "approach": "Given the following snippet: Server.append( ‘Show’ , function (req, res, next) )",
  "options": [],
  "question": "According to SFRA, which two optionsshows a correct way to complete the code above in order to provide data to the response using a controller? Choose 2 answers",
  "answers": [
    {
      "option": "res.viewData = {data: myDataObject};res.render(‘/content/myPage’);next();})",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "res.setViewData ({data: myDataObject});res.render(‘/content/myPage’);next();});",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "res.render(‘/content/myPage’,{data: myDataObject});next();})",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "res.render(‘/content/myPage’);next();}).append{(Data:myDataObject});",
      "correct": true,
      "isSelected": false
    },
  ],
  "isAnswered": false,
  "isMultiple": true
},
"205": {
  "approach": "",
  "options": [],
  "question": "Which of these situations is an appropriate use of the E2C Commerce Open Commerce APIs (OCAPIs)?",
  "answers": [
    {
      "option": "Showing the customer's information in their B2C Commerce 'My Account' page",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "Extending System Object Type deflnltlons with new attributes",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "updating inventory information from a warehouse management software",
      "correct": true,
      "isSelected": false
    }    
  ],
  "isAnswered": false,
  "isMultiple": false
},
"206": {
  "approach": "A merchant has a new requirement to accept American Express credit cards on Storefront, A credit card payment method already exists.",
  "options": [],
  "question": "Which Step must a developer take in Business Manager to achieve this?",
  "answers": [
    {
      "option": "Payment Processor, create American Express as a payment type",
      "correct": false,
      "isSelected": false
    },  
    {
      "option": "In Payment Methods, enable American Express as a credit card type",
      "correct": true,
      "isSelected": false
    },
    {
      "option": "In Site Preferences, add American Express es a Payment Preference.",
      "correct": false,
      "isSelected": false
    }    
  ],
  "isAnswered": false,
  "isMultiple": false
}



}


export default  {questions}


  