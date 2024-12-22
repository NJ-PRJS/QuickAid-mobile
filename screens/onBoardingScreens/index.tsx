import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { swahilislides } from '../../data/SwahiliBoarding';
import { englishslides } from '../../data/EnglishBoarding';
import { useQuickAidContext } from '../../Context';
import {styles} from "../../globalStyles/onBoardingStyles";

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#fff', white: '#F94C81'};

const Slide = ({item}:any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '55%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={[styles.title, {marginTop:0, color:COLORS.white}]}>{item?.titlered}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}:any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const {defaultLanguage} = useQuickAidContext();

  const ref:any = React.useRef();
  const updateCurrentSlideIndex = (e:any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const slidess = defaultLanguage?.language === "ENGLISH"? englishslides: swahilislides;

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slidess.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slidess.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slidess.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 30}}>
          {currentSlideIndex == slidess.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.getStatedbtn}
                onPress={() => navigation.replace('home')}>
                <Text style={{ fontFamily: 'Poppins-bold', fontSize: 15, color:"white"}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btnsk,
                  {
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                    flexGrow:1
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontFamily: 'Poppins-bold',
                    fontSize: 18,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontFamily: 'Poppins-bold',
                    fontSize: 15,
                    color:"white"
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary, paddingTop:10}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75,}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slidess}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};


export default OnboardingScreen;
