(function(w, d, $) {

	var list,
		$pub,
		props = {},
		keys,
		domUpdate = false;

	function sortProp(type) {
		props = {};
		var attr,
			isTime = (type == 'data-time');
		for (var i = 0, len = list.length; i < len; i++) {
			attr = isTime ? list[i].getAttribute(type).substr(0, 4) :
				list[i].getAttribute(type);
			if (!props[attr])
				props[attr] = [];
			// props[attr].push(list[i]);
			var idx;
			for(var idx = 0, len2 = props[attr].length; idx < len2;idx++){
				if (list[i].getAttribute('data-time').localeCompare(props[attr][idx].getAttribute('data-time'))==1)
					break;
				else
					continue;
			}
			props[attr].splice(idx,0,list[i]);
		};

		keys = Object.keys(props);
	}

	function compare(a, b) {
		if (typeof(a) == 'string')
            return a.localeCompare(b);
        return a - b;
	}

	function compareRev(a, b) {
       if (typeof(b) == 'string')
            return b.localeCompare(a);
        return b - a;
	}

	function loadData(type) {
		var $html,
			arr,
			html = [],
			$div = $('<div>'),
			$li,
			key,
			$x = $('<div>'),
			$a = $('<a>').appendTo($x),
			$h3,
			anchors = [];

		anchors.push('<br>');

		$pub.html('');

		for (var i = 0, len = keys.length; i < len; i++) {

			key = keys[i];
			arr = props[key];

			$li = $('<ol>');

			// anchors
			$a.text(key)
				.attr('href', '#' + key)
				.html();
			anchors.push($x.html());

			if (i !== len - 1)
				anchors.push('&nbsp;|&nbsp;');

			for (var j = 0; j < arr.length; j++)
				$(arr[j]).clone().appendTo($li);

			$h3 = $('<h3>');
			$('<a>', {
				'name' : key,
				'text' : key
			}).appendTo($h3);

			$h3.appendTo($div);

			$li.appendTo($div);
		};

		$div.appendTo($pub);
		$anc.html(anchors.join(''));
	}

	function toggleUpdated(type) {

		var init,
        	end;

        init = new Date();

		if (!domUpdate) {
			domUpdate = true;
			list = $('#publicationdatabase')
				.find('.publication')
				.get();
			$pub = $('#publication');
			$anc = $('#anchors');
		}
		// sort the list
		sortProp(type);
		// sort keys
		keys = (type == 'data-time') ?
		 	keys.mergeSort(compareRev) :
		 	keys.mergeSort(compare);

		loadData(type);

		end = new Date();
    	$('#time').html((end.getTime() - init.getTime()) / 1000 + ' sec');
	}

	w.toggle = toggleUpdated;

})(window, document, jQuery);
