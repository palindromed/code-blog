var newPost = {};

newPost.formProcess = function( ) {
  $('#jsonView').hide();
  $('#submitPost').on('submit', function(event) {
    event.preventDefault();
    //populate newPost object Try running through article constructor
    newPost.title = $('#title').val();
    newPost.category = $('#category').val();
    newPost.author = $('#author').val();
    newPost.authorUrl = $('#authorUrl').val();

    newPost.publishedOn = newPost.dateString();
    newPost.body = marked($('#body').val());
    hljs.configure({useBR: true});


    //clear input elements
    $('#submitPost').each(function() {
      this.reset();
    });

    //save object to local storage
    localStorage.setItem('newArticle', JSON.stringify(newPost));

    newPost.previewArticle();
  });
};

newPost.dateString = function() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  if(day < 10) {
    day = '0'+ day;
  };
  if(month < 10){
    month = '0'+ (month);
  };
  return date.getFullYear() + '-' + month + '-' + day;
};

newPost.previewArticle = function() {
  var source = $('#articleTemplate').html();
  var template = Handlebars.compile(source);
  $('#jsonView').text(JSON.stringify(newPost)).show();

  var compiledHtml = template(newPost);
  $('#preview').html(compiledHtml);

  $('code').each(function(i, block){
    hljs.highlightBlock(block);
  });

};

$(function(){
  newPost.formProcess();
});
