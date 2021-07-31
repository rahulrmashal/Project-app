const { navigation } = props;
 
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MSinGermany", {               //<--- Call WebViewScreen and Pass URL
              url: "https://msingermany.co.in/"
            })
          }
        >
          <Text style={{ color: "#FFFFFF", paddingHorizontal: 15 }}>
            Open WebView screen
          </Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);