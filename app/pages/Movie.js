import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react';

const movies = [
    { title: 'Movie 1', genre: 'Genre 1', actors: 'Actor 1, Actor 2', directors: 'Director 1, Director 2', ratings: 7.5 },
    { title: 'Movie 2', genre: 'Genre 2', actors: 'Actor 3, Actor 4', directors: 'Director 3, Director 4', ratings: 8.0 },
  // more movies...
];

export default function Movie() {
    return (
    <ScrollView>
        <View style={styles.header}>
        <Text style={styles.headerText}>Title</Text>
        <Text style={styles.headerText}>Genre</Text>
        <Text style={styles.headerText}>Actors</Text>
        <Text style={styles.headerText}>Directors</Text>
        <Text style={styles.headerText}>Ratings</Text>
        </View>
        {movies.map((movie, index) => (
        <View key={index} style={styles.row}>
            <Text style={styles.text}>{movie.title}</Text>
            <Text style={styles.text}>{movie.genre}</Text>
            <Text style={styles.text}>{movie.actors}</Text>
            <Text style={styles.text}>{movie.directors}</Text>
            <Text style={styles.text}>{movie.ratings}</Text>
        </View>
        ))}
    </ScrollView>
    );
}


