import webbrowser

class Movie() :
    
    """ This class provides info related to movies """
    
    #constructor that takes movie details and instantiate Movie objects
    def __init__(self,movie_title,story_line,poster_image_url,trailer_youtube_url) :
        self.title = movie_title
        self.story_line = story_line
        self.poster_image_url = poster_image_url
        self.trailer_youtube_url = trailer_youtube_url

