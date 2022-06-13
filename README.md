# UFOs

## Overview

Use Javascript to build a dynamic HTML webpage that includes an interactive, filterable dashboard of UFO sightings. 

Our initial iteration included a filter for dates; we then expanded this to include filters for city, state, country, and shape associated with the UFO sightings, allowing for more in-depth analysis.

## Performing a search

To perform a search, simply input your search criteria in the desired field, then hit `enter` or click out of the field. 
    
Search results are conjunctive, meaning that results reflect cases where all search criteria are true. Click `Refresh Table` or refresh the browser to restore the full table of UFO sightings. 

![ufos1.png](/static/images/ufos1.png)


## Summary

### Drawback of the current approach

A primary drawback of the current approach is the inability to conduct disjunctive ('or') searching as well as exclusive searching. Lack of this type of functionality requires the end user to perform multiple searches to find desired results.

### Recommendations for further development

1. Expand the dataset so that the end user can perform further exporations, particularly trends over time; examples:
    * https://nuforc.org/databank/
    * https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings
2. Expanding the dataset will also require improving search functionality. The addition of 'or' as well as exclusive searching would allow a user to more quickly find results they're looking for.

