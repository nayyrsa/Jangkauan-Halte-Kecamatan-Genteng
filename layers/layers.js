var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
                title: '<img src="styles/legend/kecamatan_genteng_ar_1.png" /> kecamatan_genteng_ar'
            });
var format_jalan_clean_2 = new ol.format.GeoJSON();
var features_jalan_clean_2 = format_jalan_clean_2.readFeatures(json_jalan_clean_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_2.addFeatures(features_jalan_clean_2);
var lyr_jalan_clean_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_2, 
                style: style_jalan_clean_2,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_2.png" /> jalan_clean'
            });
var format_GentengIntersectFIX_3 = new ol.format.GeoJSON();
var features_GentengIntersectFIX_3 = format_GentengIntersectFIX_3.readFeatures(json_GentengIntersectFIX_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GentengIntersectFIX_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GentengIntersectFIX_3.addFeatures(features_GentengIntersectFIX_3);
var lyr_GentengIntersectFIX_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GentengIntersectFIX_3, 
                style: style_GentengIntersectFIX_3,
                popuplayertitle: 'Genteng Intersect FIX',
                interactive: true,
                title: '<img src="styles/legend/GentengIntersectFIX_3.png" /> Genteng Intersect FIX'
            });
var format_EmbongKaliasinIntersectFIX_4 = new ol.format.GeoJSON();
var features_EmbongKaliasinIntersectFIX_4 = format_EmbongKaliasinIntersectFIX_4.readFeatures(json_EmbongKaliasinIntersectFIX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmbongKaliasinIntersectFIX_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmbongKaliasinIntersectFIX_4.addFeatures(features_EmbongKaliasinIntersectFIX_4);
var lyr_EmbongKaliasinIntersectFIX_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmbongKaliasinIntersectFIX_4, 
                style: style_EmbongKaliasinIntersectFIX_4,
                popuplayertitle: 'Embong Kaliasin Intersect FIX',
                interactive: true,
                title: '<img src="styles/legend/EmbongKaliasinIntersectFIX_4.png" /> Embong Kaliasin Intersect FIX'
            });
var format_KetabangIntersectFIX_5 = new ol.format.GeoJSON();
var features_KetabangIntersectFIX_5 = format_KetabangIntersectFIX_5.readFeatures(json_KetabangIntersectFIX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KetabangIntersectFIX_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KetabangIntersectFIX_5.addFeatures(features_KetabangIntersectFIX_5);
var lyr_KetabangIntersectFIX_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KetabangIntersectFIX_5, 
                style: style_KetabangIntersectFIX_5,
                popuplayertitle: 'Ketabang Intersect FIX',
                interactive: true,
                title: '<img src="styles/legend/KetabangIntersectFIX_5.png" /> Ketabang Intersect FIX'
            });
var format_PenelehIntersectFIX_6 = new ol.format.GeoJSON();
var features_PenelehIntersectFIX_6 = format_PenelehIntersectFIX_6.readFeatures(json_PenelehIntersectFIX_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenelehIntersectFIX_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenelehIntersectFIX_6.addFeatures(features_PenelehIntersectFIX_6);
var lyr_PenelehIntersectFIX_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenelehIntersectFIX_6, 
                style: style_PenelehIntersectFIX_6,
                popuplayertitle: 'Peneleh Intersect FIX',
                interactive: true,
                title: '<img src="styles/legend/PenelehIntersectFIX_6.png" /> Peneleh Intersect FIX'
            });
var format_KapasariIntersectFIX_7 = new ol.format.GeoJSON();
var features_KapasariIntersectFIX_7 = format_KapasariIntersectFIX_7.readFeatures(json_KapasariIntersectFIX_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KapasariIntersectFIX_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KapasariIntersectFIX_7.addFeatures(features_KapasariIntersectFIX_7);
var lyr_KapasariIntersectFIX_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KapasariIntersectFIX_7, 
                style: style_KapasariIntersectFIX_7,
                popuplayertitle: 'Kapasari Intersect FIX',
                interactive: true,
                title: '<img src="styles/legend/KapasariIntersectFIX_7.png" /> Kapasari Intersect FIX'
            });
var format_Buffer400mDissolve_8 = new ol.format.GeoJSON();
var features_Buffer400mDissolve_8 = format_Buffer400mDissolve_8.readFeatures(json_Buffer400mDissolve_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer400mDissolve_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer400mDissolve_8.addFeatures(features_Buffer400mDissolve_8);
var lyr_Buffer400mDissolve_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer400mDissolve_8, 
                style: style_Buffer400mDissolve_8,
                popuplayertitle: 'Buffer 400m Dissolve',
                interactive: true,
                title: '<img src="styles/legend/Buffer400mDissolve_8.png" /> Buffer 400m Dissolve'
            });
var format_ServiceArea400m_9 = new ol.format.GeoJSON();
var features_ServiceArea400m_9 = format_ServiceArea400m_9.readFeatures(json_ServiceArea400m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea400m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea400m_9.addFeatures(features_ServiceArea400m_9);
var lyr_ServiceArea400m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea400m_9, 
                style: style_ServiceArea400m_9,
                popuplayertitle: 'Service Area 400m',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea400m_9.png" /> Service Area 400m'
            });
var format_halte_pt_10 = new ol.format.GeoJSON();
var features_halte_pt_10 = format_halte_pt_10.readFeatures(json_halte_pt_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_10.addFeatures(features_halte_pt_10);
var lyr_halte_pt_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_10, 
                style: style_halte_pt_10,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_10.png" /> halte_pt'
            });

lyr_Positron_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_jalan_clean_2.setVisible(true);lyr_GentengIntersectFIX_3.setVisible(true);lyr_EmbongKaliasinIntersectFIX_4.setVisible(true);lyr_KetabangIntersectFIX_5.setVisible(true);lyr_PenelehIntersectFIX_6.setVisible(true);lyr_KapasariIntersectFIX_7.setVisible(true);lyr_Buffer400mDissolve_8.setVisible(true);lyr_ServiceArea400m_9.setVisible(true);lyr_halte_pt_10.setVisible(true);
var layersList = [lyr_Positron_0,lyr_kecamatan_genteng_ar_1,lyr_jalan_clean_2,lyr_GentengIntersectFIX_3,lyr_EmbongKaliasinIntersectFIX_4,lyr_KetabangIntersectFIX_5,lyr_PenelehIntersectFIX_6,lyr_KapasariIntersectFIX_7,lyr_Buffer400mDissolve_8,lyr_ServiceArea400m_9,lyr_halte_pt_10];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_jalan_clean_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_GentengIntersectFIX_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', 'Luas Jangk': 'Luas Jangk', 'Persentase': 'Persentase', 'Tidak (%)': 'Tidak (%)', });
lyr_EmbongKaliasinIntersectFIX_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', 'Luas Jangk': 'Luas Jangk', 'Persentase': 'Persentase', 'Tidak (%)': 'Tidak (%)', });
lyr_KetabangIntersectFIX_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', 'Luas Jangk': 'Luas Jangk', 'Persentase': 'Persentase', 'Tidak (%)': 'Tidak (%)', });
lyr_PenelehIntersectFIX_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', 'Luas Jangk': 'Luas Jangk', 'Luas FIX': 'Luas FIX', 'Persentase': 'Persentase', 'Tidak (%)': 'Tidak (%)', });
lyr_KapasariIntersectFIX_7.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', });
lyr_Buffer400mDissolve_8.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_ServiceArea400m_9.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_10.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_jalan_clean_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_GentengIntersectFIX_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas': 'TextEdit', 'Luas Jangk': 'TextEdit', 'Persentase': 'TextEdit', 'Tidak (%)': 'TextEdit', });
lyr_EmbongKaliasinIntersectFIX_4.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas': '', 'Luas Jangk': '', 'Persentase': '', 'Tidak (%)': '', });
lyr_KetabangIntersectFIX_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas': '', 'Luas Jangk': '', 'Persentase': '', 'Tidak (%)': '', });
lyr_PenelehIntersectFIX_6.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas': '', 'Luas Jangk': '', 'Luas FIX': '', 'Persentase': '', 'Tidak (%)': '', });
lyr_KapasariIntersectFIX_7.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas': '', });
lyr_Buffer400mDissolve_8.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_ServiceArea400m_9.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_halte_pt_10.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Informasi Halte__RUTE': 'inline label - always visible', 'Informasi Halte__Destinasi': 'inline label - always visible', });
lyr_jalan_clean_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_GentengIntersectFIX_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Luas Jangk': 'inline label - always visible', 'Persentase': 'inline label - always visible', 'Tidak (%)': 'inline label - always visible', });
lyr_EmbongKaliasinIntersectFIX_4.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Luas Jangk': 'inline label - always visible', 'Persentase': 'inline label - always visible', 'Tidak (%)': 'inline label - always visible', });
lyr_KetabangIntersectFIX_5.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Luas Jangk': 'inline label - always visible', 'Persentase': 'inline label - always visible', 'Tidak (%)': 'inline label - always visible', });
lyr_PenelehIntersectFIX_6.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Luas Jangk': 'no label', 'Luas FIX': 'inline label - always visible', 'Persentase': 'inline label - always visible', 'Tidak (%)': 'inline label - always visible', });
lyr_KapasariIntersectFIX_7.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Buffer400mDissolve_8.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_ServiceArea400m_9.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_10.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', });
lyr_halte_pt_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});