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

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#fff', white: '#F94C81'};

const slides = [
  {
    id: '1',
    image: require('../../assets/firstboard.png'),
    title: 'For immediate assistance and ',
    titlered: 'first aid tips ',
    subtitle: 'Access real-time first aid information online when you need it the most',
  },
  {
    id: '2',
    image: require('../../assets/Group.png'),
    title: 'Instantly access nearby hospitals ',
    titlered: '',
    subtitle: 'first aid assistance allows you to quickly share nearby hospital locations with ease.',
  },
  {
    id: '3',
    image: require('../../assets/doc.png'),
    title: 'Your online medical guidance ',
    titlered: 'is here for you',
    subtitle: 'In moments of distress, your virtual health companion is here to assist you online.',
  },
];

const Slide = ({item}:any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '65%', width, resizeMode: 'contain'}}
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
  const ref:any = React.useRef();
  const updateCurrentSlideIndex = (e:any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
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
          {slides.map((_, index) => (
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
        <View style={{marginBottom: 40}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.getStatedbtn}
                onPress={() => navigation.replace('home')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:"white"}}>
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
                    fontWeight: 'bold',
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
                    fontWeight: 'bold',
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
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75,}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    // color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    width:270
  },
  title: {
    // color: COLORS.white,
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    width:250
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    height: 50,
    borderRadius: 50,
    backgroundColor:COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width:80,
    elevation:10
  },
  btnsk: {
    height: 50,
    borderRadius: 50,
    backgroundColor:COLORS.white,
    justifyContent: 'center',
    // alignItems: 'center',
    width:80,
    // elevation:10
  },
  getStatedbtn:{
    height: 50,
    borderRadius: 50,
    backgroundColor:COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:10,
    flex:1
  }
});
export default OnboardingScreen;