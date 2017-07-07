import webbrowser
import os
import re

# Styles and scripting for the page
main_page_head = '''
<head>
    <meta charset="utf-8">
    <title>FMT-homepage</title>
    <!-- Bootstrap 3 CSS-->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap-theme.min.css">
    <!--Google Font-->
    <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet">
    <!--Font Awesome-->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!--Jquery-->
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <!--Bootstrap 3 JS-->
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
    <style type="text/css" media="screen">
        body {
            padding-top: 80px;
            background: #fff;
            font-family: 'Droid Sans', sans-serif;
            padding-top: 0px;
        }
        
        .navbar {
            background: #d85277;
            box-shadow: 0px 0px 4px #666;
            margin-bottom: 0px;
        }
        
        .navbar a {
            color: #fff;
        }
        
        .headings {
            color: #F05C85;
            margin-bottom: 40px;
            margin-top: 0px;
        }
        
        .band {
            background: #1c262f;
            height: 300px;
            padding-top: 40px;
            color: #fff;
        }
        
        .logo-heading {
            color: #f3f3f3;
            font-size: 50px;
            font-weight: bold;
            letter-spacing: 5px;
        }
        
        .main-content {
            position: absolute;
            top: 30%;
            width: 80%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            background: #fff;
            padding: 30px 13px;
        }
        
        #trailer .modal-dialog {
            margin-top: 200px;
            width: 640px;
            height: 480px;
        }
        
        .hanging-close {
            position: absolute;
            top: -12px;
            right: -12px;
            z-index: 9001;
        }
        
        .mt-20 {
            margin-top: 20px;
        }
        
        .mb-10 {
            margin-bottom: 10px;
        }
        
        .mb-20 {
            margin-bottom: 20px;
        }
        
        .mr-5 {
            margin-right: 5px;
        }
        
        .pdb-10 {
            padding-bottom: 10px;
        }
        
        .border-bottom {
            border-bottom: 1px solid #ddd;
        }
        
        .logo-icons {
            font-size: 80px;
        }
        
        .trailer-container {
            padding: 30px 0px;
        }
        
        .category-heading {
            color: #F05C85;
        }
        
        #trailer-video {
            width: 100%;
            height: 100%;
        }
        
        .movie-card {
            margin-bottom: 20px;
            padding: 20px;
            box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
        }
        
        .movie-card a {
            color: #003366;
        }
        
        .movie-card img {
            margin-bottom: 10px;
        }
        
        .movie-card a:hover,
        .movie-card a:focus {
            text-decoration: none;
        }
        
        .movie-name {
            color: #F05C85;
            font-weight: bold;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 0px;
        }
        
        .story-line {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 0px;
        }
        
        .scale-media {
            padding-bottom: 56.25%;
            position: relative;
        }
        
        .scale-media iframe {
            border: none;
            height: 100%;
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            background-color: white;
        }
        
        @media only screen and (min-device-width:320px) and (max-device-width:749px) {
            .main-content {
                top: 14%;
            }
        }
        
        @media only screen and (min-device-width:768px) and (max-device-width:1024px) {
            .main-content {
                top: 18%;
            }
        }
    </style>
    <script type="text/javascript" charset="utf-8">
        // Pause the video when the modal is closed
        $(document).on('click', '.hanging-close, .modal-backdrop, .modal', function(event) {
            // Remove the src so the player itself gets removed, as this is the only
            // reliable way to ensure the video stops playing in IE
            $("#trailer-video-container").empty();
        });
        // Start playing the video whenever the trailer modal is opened
        $(document).on('click', '.movie-card', function(event) {
            var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
            var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
            $("#trailer-video-container").empty().append($("<iframe></iframe>", {
                'id': 'trailer-video',
                'type': 'text-html',
                'src': sourceUrl,
                'frameborder': 0
            }));
        });
        // Animate in the movies when the page loads
    </script>
</head>
'''

# The main page layout and title bar
main_page_content = '''
<!DOCTYPE html>
<html lang="en">
<body>
    <!-- Trailer Video Modal -->
    <div class="modal" id="trailer">
        <div class="modal-dialog">
            <div class="modal-content">
                <a href="#" class="hanging-close" data-dismiss="modal" aria-hidden="true">
                    <img src="https://lh5.ggpht.com/v4-628SilF0HtHuHdu5EzxD7WRqOrrTIDi_MhEG6_qkNtUK5Wg7KPkofp_VJoF7RS2LhxwEFCO1ICHZlc-o_=s0#w=24&h=24" />
                </a>
                <div class="scale-media" id="trailer-video-container">
                </div>
            </div>
        </div>
    </div>
    <!-- Main Page Content -->
    <section class="container-fluid band">
        <header class="text-center">
            <div class="col-md-4 col-xs-4 mt-20">
                <i class="fa fa-play-circle logo-icons" aria-hidden="true"></i>
            </div>
            <div class="col-md-4 col-xs-4">
                <h1 class="logo-heading">FMT</h1>
                <h4 class="headings">Fresh Movies Trailers</h4>
            </div>
            <div class="col-md-4 col-xs-4 mt-20">
                <i class="fa fa-film logo-icons" aria-hidden="true"></i>
            </div>
        </header>
    </section>
    <section class="main-content">
        <div class="middle-content">
            <h3 class="text-center headings">The trailers of your favorite movies are here. Check them out.</h3>
        </div>
        <div class="trailer-container">
          <div class="trailer-contents row">
            <h4 class="category-heading mb-20 pdb-10 border-bottom"><i class="fa fa-film mr-5" aria-hidden="true"></i><span>New Releases and Popular Movies</span></h4>            
                {movie_tiles}
            </div>
        </div>
    </section>
</body>
</html>
'''

# A single movie entry html template
movie_tile_content = '''
    <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 text-center">
        <div class="movie-card" data-trailer-youtube-id="{trailer_youtube_id}" data-toggle="modal" data-target="#trailer">
            <a href="javascript:void(0)" class="movie-text" title="{movie_title}-{story_line}">
                <img class="img-responsive" src="{poster_image_url}" width="220" height="342">
                <span class="movie-name">{movie_title}</span>
                <p class="story-line">{story_line}</p>
            </a>
        </div>
    </div>
'''

def create_movie_tiles_content(movies):
    # The HTML content for this section of the page
    content = ''
    for movie in movies:
        # Extract the youtube ID from the url
        youtube_id_match = re.search(r'(?<=v=)[^&#]+', movie.trailer_youtube_url)
        youtube_id_match = youtube_id_match or re.search(r'(?<=be/)[^&#]+', movie.trailer_youtube_url)
        trailer_youtube_id = youtube_id_match.group(0) if youtube_id_match else None

        # Append the tile for the movie with its content filled in
        content += movie_tile_content.format(
            movie_title=movie.title,
            story_line = movie.story_line,
            poster_image_url=movie.poster_image_url,
            trailer_youtube_id=trailer_youtube_id
        )
    return content

def open_movies_page(movies):
  # Create or overwrite the output file
  output_file = open('fresh_tomatoes.html', 'w')

  # Replace the placeholder for the movie tiles with the actual dynamically generated content
  rendered_content = main_page_content.format(movie_tiles=create_movie_tiles_content(movies))

  # Output the file
  output_file.write(main_page_head + rendered_content)
  output_file.close()

  # open the output file in the browser
  url = os.path.abspath(output_file.name)
  webbrowser.open('file://' + url, new=2) # open in a new tab, if possible
