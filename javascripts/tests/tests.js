$(document).ready(function () {

    test("Tab list attribute generation", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        var tabList = $(tabContainer).find('> ul');
        var tabs = tabList.find('li');
        tabContainer.skeletonTabs();        

        equal($(tabList).attr('role'),
            'tablist',
            'Expect first unordered list to have tabList role');

    });  

    test("Tab attribute generation with nothing set", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        var tabList = $(tabContainer).find('> ul');
        var tabs = tabList.find('li');
        tabContainer.skeletonTabs();        

        equal($(tabs).first().attr('aria-selected'),
            'true',
            'Expect first tab to have aria-selected set to true');

        $(tabs).each(function(index) {
            if(index != 0){
                equal($(this).attr('aria-selected'),
                'false',
                'Expect subsequent tabs to have aria-selected set to false')    
            }            
        });

    });

    test("Tab attribute generation with aria selected set by user", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        $(tabContainer).find("ul li:nth-child(2)").attr('aria-selected', 'true'); 
        var tabList = $(tabContainer).find('> ul');
        var tabs = tabList.find('li');
        tabContainer.skeletonTabs();

        equal($(tabList).find(':nth-child(2)').attr('aria-selected'),
            'true',
            'Expect 2nd tab aria-selected role to be true');

        equal($(tabList).find('[aria-selected="true"]').length,
            1,
            'Expect one aria-selected role to be true');

        $(tabs).each(function(index) {
                notEqual($(this).attr('aria-selected'),
                null,
                'Expect tab at position ' + index + ' to have an aria-selected attribute that is not null')             
        });

    });

    test("Tabs and tabpanel ID generation", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        var tabList = $(tabContainer).find('> ul');
        var tabs = tabList.find('li');
        var tabPanels = $(tabContainer).children().not('ul');
        tabContainer.skeletonTabs();

        $(tabs).each(function(index) {
                var tabID = $(this).attr('id');
                ok(tabID, 'Expect tab at position ' + index + ' to have an id');           
        });

        $(tabPanels).each(function(index) {
                var tabPanelID = $(this).attr('id');
                ok(tabPanelID, 'Expect tab panel at position ' + index + ' to have an id');            
        });

    });

    test("Tabs and tabpanel ID generation with IDs set by user", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        $(tabContainer).find("ul li:nth-child(2)").attr('id', 'something');
        $(tabContainer).children().not('ul').first().attr('id', 'else'); 
        var tabList = $(tabContainer).find('> ul');
        var tabs = tabList.find('li');
        var tabPanels = $(tabContainer).children().not('ul');
        tabContainer.skeletonTabs();

        equal($(tabList).find(':nth-child(2)').attr('id'),
            'something',
            'Expect 2nd tab id role to be "something"');

        equal($(tabPanels).first().attr('id'),
            'else',
            'Expect 2nd tab id role to be "else"');

    });

    test("Tab role generation", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        var tabList = $(tabContainer).find('> ul');
        var tabs = tabList.find('li');
        tabContainer.skeletonTabs();

        $(tabs).each(function(index) {
            equals($(this).attr('role'),
                'tab',
                'Expect tab at position ' + index + ' to have an id');             
        });

    });

    test("Tabpanel role generation", function () {

        var tabContainer = $('#qunit-fixture #tab-container');
        var tabList = $(tabContainer).find('> ul');
        var tabPanels = $(tabContainer).children().not('ul');
        tabContainer.skeletonTabs();

        $(tabPanels).each(function(index) {
            equals($(this).attr('role'),
                'tabpanel',
                'Expect tab panel at position ' + index + ' to have an id');             
        });

    });

});