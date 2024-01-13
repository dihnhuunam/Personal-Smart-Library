import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';

export default function DetailScreen({ route, navigation }) {
    const { selectedBook } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image
                        style={styles.backIcon}
                        source={require('../assets/arrow_back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Book Details</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image
                    style={styles.detailsImage}
                    source={{ uri: selectedBook.ImageURL }}
                    resizeMode="contain"
                />
                <Text style={styles.detailsTitle}>{selectedBook.Title}</Text>
                <Text style={styles.detailsCategory}>{selectedBook.Category}</Text>
                <Text style={styles.detailsAuthor}>{`Author: ${selectedBook.Author}`}</Text>
                <Text style={styles.detailsPublicationDate}>{`Published: ${selectedBook.PublicationDate}`}</Text>
                <Text style={styles.detailsDescription}>{selectedBook.Description}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.background,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButton: {
        marginRight: 16,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    headerText: {
        fontSize: 28, 
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    detailsContainer: {
        alignItems: 'flex-start',  
    },
    detailsImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    detailsTitle: {
        fontSize: 22,  
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginBottom: 8,
    },
    detailsCategory: {
        fontSize: 18,  
        color: theme.colors.secondary,
        marginBottom: 8,
    },
    detailsAuthor: {
        fontSize: 18,  
        color: theme.colors.secondary,
        marginBottom: 8,
    },
    detailsPublicationDate: {
        fontSize: 16,  
        color: theme.colors.text,
        marginBottom: 8,
    },
    detailsDescription: {
        fontSize: 16, 
        color: theme.colors.text,
        textAlign: 'left',  
        marginBottom: 16,
    },
});
