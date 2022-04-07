/* useEffect(() => {
      
    1codigo
    promise
          .then((products) => {
          setProducts(products)
      }).catch((error) => {
          console.error("Error: ", error)
      })
      .finally(() => {
          setLoading(false)
      })







    2codigo
      fetch(apiUrl)
      .then(products => products.json())
      .then((products) => {
          if (brandName) {
              const filterProducts = products.filter(
                  (element) => element.brand === brandName
              )
              setProducts(filterProducts)
          }else{
              setProducts(products)
          } 
      }) 
  }, [brandName]) */