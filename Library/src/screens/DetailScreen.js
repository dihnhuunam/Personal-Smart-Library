import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';

export default function DetailScreen({ route, navigation }) {
    const { selectedBook } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image style={{ width: 24, height: 24 }} source={require('../assets/arrow_back.png')} />
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
                <Text style={styles.detailsCategory}>{`Category: ${selectedBook.Category}`}</Text>
                <Text style={styles.detailsAuthorName}>{`Author: ${selectedBook.AuthorName}`}</Text>
                <Text style={styles.detailsPublicationDate}>{`Published: ${selectedBook.PublicationDate}`}</Text>
                <Text style={styles.detailsPublicationDate}>{`Page Count: ${selectedBook.PageCount}`}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 8,
    },
    backButton: {
        position: 'absolute',
        left: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    headerText: {
        fontSize: 30,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    detailsContainer: {
        flex: 1, 
        alignItems: 'center', 
        marginTop: 16,
    },
    detailsImage: {
        width: 220,
        height: 220,
        marginBottom: 16,
    },
    detailsTitle: {
        fontSize: 25,  
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginBottom: 8,
    },
    detailsCategory: {
        fontSize: 18,  
        color: theme.colors.text,
        marginBottom: 8,
    },
    detailsAuthorName: {
        fontSize: 18,  
        color: theme.colors.text,
        marginBottom: 8,
    },
    detailsPublicationDate: {
        fontSize: 18,  
        color: theme.colors.text,
        marginBottom: 8,
    },
    detailsDescription: {
        fontSize: 18, 
        color: theme.colors.text,
        textAlign: 'left',  
        marginBottom: 16,
    },
});
