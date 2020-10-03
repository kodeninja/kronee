module.exports = function Doc({ visits }) {
  visits = visits || ''
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
  <title>Architect</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html,
    body {
      height: 100%;
    }
    body {
      display: flex;
      justify-content: center;
      padding-top: 6rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      color: white;
      background-image: linear-gradient(-45deg, #25A78B, #7A43EE);
      background-repeat: no-repeat;
    }
    .margin-bottom1 {
      margin-bottom: 0.75rem;
    }
    .text-align-center {
      text-align: center;
    }
    .font-size-m {
      font-size: 0.75rem;
    }
    .font-size-xl {
      font-size: 3rem;
    }
    .color-white {
      color: white;
    }

    @media screen and (min-width: 42em) {
      .margin-bottom1 {
        margin-bottom: 1rem;
      }
      .font-size-m {
        font-size: 1.5rem;
      }
      .font-size-xl {
        font-size: 4.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="text-align-center">
    <h1 class="margin-bottom1 font-size-xl">
      ${ visits } views
    </h1>
    <p class="font-size-m">
      Now go check out your app's <br/> <a href="https://begin.com/forward/scheduled" class="color-white">scheduled functions</a>!
    </p>
  </div>
</body>
</html>
  `
}

