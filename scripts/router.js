page('/', articleController.index);

page('/about', reposController.index);

page('/category/:category', articleController.category, articleController.show);

page.start();
