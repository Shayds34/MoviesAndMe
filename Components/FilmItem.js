import React from 'react'
import moment from 'moment'
import { StyleSheet, View, Text, Image, Animated, TouchableOpacity, Dimensions } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'


class FilmItem extends React.Component {

  _displayFavoriteImage(){
    if (this.props.isFilmFavorite) {
      return (
        <Image
          style={styles.favorite_image}
          source={require('../Images/ic_favorite.png')}
        />
      )
    }
  }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <FadeIn>
        <TouchableOpacity
          onPress={() => displayDetailForFilm(film.id)}
          style={styles.main_container}>
          <Image
            style={styles.film_image}
            source={{uri: getImageFromApi(film.poster_path)}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                {this._displayFavoriteImage()}
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.rating_text}>{film.vote_average}</Text>
              </View>

              <View style={styles.desc_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>

              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
              </View>
            </View>
        </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    height: 190
  },
  film_image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 5
  },
  rating_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#666666'
  },
  desc_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container:{
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 20,
    height: 20
  }
})

export default FilmItem
