import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { theme } from '../core/theme';
import TextInput from '../components/TextInput';
import { useAuth } from '../Hook/useAuth';
import { update, getDatabase, ref } from 'firebase/database';

export default function Progress({ route, navigation }) {
    const { selectedBook } = route.params;
    console.log(selectedBook);
    const [currentPage, setCurrentPage] = useState('');
    const [percentage, setPercentage] = useState(0);
    const { user } = useAuth();
    const handleSendPress = () => {
        const numericValue = parseFloat(currentPage);
        if (!isNaN(numericValue ) && numericValue < selectedBook.PageCount) {
          // Thay thế giá trị này bằng pageCount thực tế của bạn
            const calculatedPercentage = (numericValue / selectedBook.PageCount) * 100;
            setPercentage(`${calculatedPercentage.toFixed(2)}%`);
            Keyboard.dismiss();
        } else {
            Alert.alert('Please enter valid number');
        }
    }; 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image style={{ width: 24, height: 24 }} source={require('../assets/arrow_back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>My Progress</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Image
                    style={styles.detailsImage}
                    source={{ uri: selectedBook.ImageURL }}
                    resizeMode="contain"
                />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ margin: 20, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8 }}
                        placeholder="Current Reading Page"
                        value={currentPage}
                        onChangeText={(text) => setCurrentPage(text)}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity onPress={handleSendPress} style={{ position: 'absolute', right: 10, top: 10 }}>
                        <View style={{ marginTop: 34, marginRight: 18, padding: 8, backgroundColor: 'blue', borderRadius: 4 }}>
                            <Text style={{ color: 'white' }}>Send</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.detailsTitle}>{selectedBook.Title}</Text>
                <Text style={styles.detailsCategory}>{`Category: ${selectedBook.Category}`}</Text>
                <Text style={styles.detailsAuthorName}>{`Author: ${selectedBook.AuthorName}`}</Text>
                <Text style={styles.detailsPublicationDate}>{`Published: ${selectedBook.PublicationDate}`}</Text>
                <Text style={styles.detailsPublicationDate}>{`Page Count: ${selectedBook.PageCount}`}</Text>

                {/* <ProgressBar progress={percentage / 100} width={200} color={'green'} /> */}
                <Text style={{ marginTop: 10, fontSize: 18 }}>
                    Percent: {percentage}
                </Text>
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
