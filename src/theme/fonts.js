export const fontFamilies = {
  serifRegular: 'Rubis-Regular, Georgia-Regular, Droid-Serif-Regular, serif',
  serifBold: 'Rubis-Bold, Georgia-Bold, Droid-Serif-Bold, serif',
  sansSerifRegular: 'GT-America-Standard-Regular, Helvetica-Neue-Regular, Arial-Regular, Roboto-Regular, sans-serif',
  sansSerifMedium: 'GT-America-Standard-Medium, Helvetica-Neue-Medium, Arial-Bold, Roboto-Medium, sans-serif'
}

export const fontFaces = (baseUrl = '/static/fonts') => `@font-face{font-family:'Rubis-Regular';src:url(${baseUrl}/rubis-regular.eot);src:url(${baseUrl}/rubis-regular.eot?#iefix) format("embedded-opentype"),url(${baseUrl}/rubis-regular.woff2) format("woff2"),url(${baseUrl}/rubis-regular.woff) format("woff"),url(${baseUrl}/rubis-regular.ttf) format("truetype")}@font-face{font-family:'Rubis-Bold';src:url(${baseUrl}/rubis-bold.eot);src:url(${baseUrl}/rubis-bold.eot?#iefix) format("embedded-opentype"),url(${baseUrl}/rubis-bold.woff2) format("woff2"),url(${baseUrl}/rubis-bold.woff) format("woff"),url(${baseUrl}/rubis-bold.ttf) format("truetype")}@font-face{font-family:'GT-America-Standard-Regular';src:url(${baseUrl}/gt-america-standard-regular.eot);src:url(${baseUrl}/gt-america-standard-regular.eot?#iefix) format("embedded-opentype"),url(${baseUrl}/gt-america-standard-regular.woff) format("woff"),url(${baseUrl}/gt-america-standard-regular.ttf) format("truetype")}@font-face{font-family:'GT-America-Standard-Medium';src:url(${baseUrl}/gt-america-standard-medium.eot);src:url(${baseUrl}/gt-america-standard-medium.eot?#iefix) format("embedded-opentype"),url(${baseUrl}/gt-america-standard-medium.woff) format("woff"),url(${baseUrl}/gt-america-standard-medium.ttf) format("truetype")}`