/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('Flickr', function(Y) {

/**
 * The Flickr module.
 *
 * @module Flickr
 */

    Y.mojito.controller = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The action context that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.flickr.getFlickrImages('mojito', function(images) {
                var dateString = ac.intl.formatDate(new Date());
                var data = {
                    images: images,
                    date: dateString,
                    greeting: ac.intl.lang("TITLE"),
                    url: ac.url.make('flickr','index')
                };
                ac.done(data);
            });
        }

    };

}, '0.0.1', {requires: ['mojito-intl-addon']});