$(imagesCollection).each(function(i){if($(activeImage).attr("src")===$(this).attr("src")){index=i}});next=imagesCollection[index+1]||imagesCollection[0];$(".lightboxImage").attr("src",$(next).attr("src"))},