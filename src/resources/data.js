let questions ={
    1 : {
        question : "A developer is given a task to implement a new Page Designer layout component that doesn't accept certain asset components. How should the developer achieve the above task?",
        options:[],
        answers:[
            {option: "Add component_type_exclusions in the layout json configuration.", correct: true, isSelected:false},
            {option: "Add component_type_inclusion in the layout json configuration.", correct: false, isSelected:false},
            {option: "Add layout_type_exclusion in the other asset components json configuration.", correct: false, isSelected:false},
        ],
        isAnswered: false

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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
    },
    6 : {
        approach: "A developer is asked to write a log containing the ID and name of the product with a variable named myProduct.",
        options: [

        ],
        question : "Which snippet Of code should be used?",
        answers:[
            {option : "Logger.warn(The current product is {ø) with name 	, myProduct.getID(), myProduct.getNane());", correct: true, isSelected:false},
            {option : "Logger.warn(The current product is ${myProduct.getID()} with name ${myProduct.getName()}", correct: false, isSelected:false},
            {option : "Logger.warn(The current product is {O} with name {option}).context(myProduct.getID(), myProduct.getName())", correct: false, isSelected:false},
        ],
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
    },
    16 : {
        approach: "A retailer notices that the Account Addresses page is showing the wrong shopper's address.",
        options: [

        ],
        question : "Which tool should the developer start with to identify the issue?",
        answers:[
            {option : "Storefront Toolkit", correct: true},
            {option : "Reports and Dashboards module", correct: false},
            {option : "Pipeline Profiler", correct: false},
        ],
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
    },
    26:{
        approach: "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded",
        options: [

        ],
        question : "What action should the Developer take to stop the quota violation?",
        answers:[
            {option : "Rewrite the code that is causing the overage.", correct: true, isSelected:false},
            {option : "Change the Business Manager configuration for the quota settings.", correct: false, isSelected:false},
            {option : "Take no action, the overage will be resolved when concurrent visitors are reduced.", correct: true, isSelected:false},
            {option : "Ask support to remove the quota limit.", correct: false, isSelected:false},
        ],
        isAnswered: false
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
        isAnswered: false
    },
    28:{
        approach: "A Digital Developer must resolve a performance issue with product tiles. The Developer determines that the product tiles are NOT being cached for a long enough period.",
        options: ["A. Enable cache information in the storefront toolkit and view the cache information for the product tile.",
            "B. View the cache information provided by the Merchant Tools > Technical Reports Business Manager module.",
            "C. View the product list page cache settings provided in the Administration > Manage Sites Business Manager module",
            "D. Enable the template debugger to verify the cache times for the producttile.isml template."

        ],
        question : "Which two methods can the Developer use to verify the cache settings for the product tiles? (Choose two.)",
        answers:[
            {option : "A, B", correct: false, isSelected:false},
            {option : "A, C", correct: false, isSelected:false},
            {option : "D, C", correct: true, isSelected:false},
            {option : "B, C", correct: false, isSelected:false},
        ],
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
    },
    33:{
        approach: "A Digital Developer is adding support for an additional language other than the default. The locale code for the new language is de.",
        options: [

        ],
        question : "In which folder should the developer place resource bundles?",
        answers:[
            {option : "templates/de", correct: false, isSelected:false},
            {option : "templates/default", correct: false, isSelected:false},
            {option : "templates/resources", correct: false, isSelected:false},
            {option : "templates/default/resources", correct: false, isSelected:false},
        ],
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
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
        isAnswered: false
    },
    45:{
        approach: "",
        options: [

        ],
        question : "",
        answers:[
            {option : "", correct: false, isSelected:false},
            {option : "", correct: false, isSelected:false},
            {option : "", correct: true, isSelected:false},
            {option : "", correct: false, isSelected:false},
        ],
        isAnswered: false
    },
    46:{
        approach: "",
        options: [

        ],
        question : "",
        answers:[
            {option : "", correct: false, isSelected:false},
            {option : "", correct: false, isSelected:false},
            {option : "", correct: true, isSelected:false},
            {option : "", correct: false, isSelected:false},
        ],
        isAnswered: false
    },
    47:{
        approach: "",
        options: [

        ],
        question : "",
        answers:[
            {option : "", correct: false, isSelected:false},
            {option : "", correct: false, isSelected:false},
            {option : "", correct: true, isSelected:false},
            {option : "", correct: false, isSelected:false},
        ],
        isAnswered: false
    },
    48:{
        approach: "",
        options: [

        ],
        question : "",
        answers:[
            {option : "", correct: false, isSelected:false},
            {option : "", correct: false, isSelected:false},
            {option : "", correct: true, isSelected:false},
            {option : "", correct: false, isSelected:false},
        ],
        isAnswered: false
    },
    49:{
        approach: "",
        options: [

        ],
        question : "",
        answers:[
            {option : "", correct: false, isSelected:false},
            {option : "", correct: false, isSelected:false},
            {option : "", correct: true, isSelected:false},
            {option : "", correct: false, isSelected:false},
        ],
        isAnswered: false
    },
    50:{
        approach: "",
        options: [

        ],
        question : "",
        answers:[
            {option : "", correct: false, isSelected:false},
            {option : "", correct: false, isSelected:false},
            {option : "", correct: true, isSelected:false},
            {option : "", correct: false, isSelected:false},
        ],
        isAnswered: false
    },

}

export default  {questions}