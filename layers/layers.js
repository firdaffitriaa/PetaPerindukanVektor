var wms_layers = [];


        var lyr_GoogleMapsAlternativerendering_0 = new ol.layer.Tile({
            'title': 'Google Maps (Alternative rendering)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_adm_cimahi_rt_cibeureumcopy_1 = new ol.format.GeoJSON();
var features_adm_cimahi_rt_cibeureumcopy_1 = format_adm_cimahi_rt_cibeureumcopy_1.readFeatures(json_adm_cimahi_rt_cibeureumcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_cimahi_rt_cibeureumcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_cimahi_rt_cibeureumcopy_1.addFeatures(features_adm_cimahi_rt_cibeureumcopy_1);
var lyr_adm_cimahi_rt_cibeureumcopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_cimahi_rt_cibeureumcopy_1, 
                style: style_adm_cimahi_rt_cibeureumcopy_1,
                popuplayertitle: "adm_cimahi_rt_cibeureum copy",
                interactive: true,
                title: '<img src="styles/legend/adm_cimahi_rt_cibeureumcopy_1.png" /> adm_cimahi_rt_cibeureum copy'
            });
var format_adm_cimahi_rt_cibeureum_2 = new ol.format.GeoJSON();
var features_adm_cimahi_rt_cibeureum_2 = format_adm_cimahi_rt_cibeureum_2.readFeatures(json_adm_cimahi_rt_cibeureum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_cimahi_rt_cibeureum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_cimahi_rt_cibeureum_2.addFeatures(features_adm_cimahi_rt_cibeureum_2);
var lyr_adm_cimahi_rt_cibeureum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_cimahi_rt_cibeureum_2, 
                style: style_adm_cimahi_rt_cibeureum_2,
                popuplayertitle: "adm_cimahi_rt_cibeureum",
                interactive: true,
                title: '<img src="styles/legend/adm_cimahi_rt_cibeureum_2.png" /> adm_cimahi_rt_cibeureum'
            });
var format_BufferedBufferFirda_3 = new ol.format.GeoJSON();
var features_BufferedBufferFirda_3 = format_BufferedBufferFirda_3.readFeatures(json_BufferedBufferFirda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferedBufferFirda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedBufferFirda_3.addFeatures(features_BufferedBufferFirda_3);
var lyr_BufferedBufferFirda_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedBufferFirda_3, 
                style: style_BufferedBufferFirda_3,
                popuplayertitle: "Buffered Buffer Firda",
                interactive: true,
                title: '<img src="styles/legend/BufferedBufferFirda_3.png" /> Buffered Buffer Firda'
            });
var format_trackTrack240722131501Track240722131501_4 = new ol.format.GeoJSON();
var features_trackTrack240722131501Track240722131501_4 = format_trackTrack240722131501Track240722131501_4.readFeatures(json_trackTrack240722131501Track240722131501_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trackTrack240722131501Track240722131501_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trackTrack240722131501Track240722131501_4.addFeatures(features_trackTrack240722131501Track240722131501_4);
var lyr_trackTrack240722131501Track240722131501_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trackTrack240722131501Track240722131501_4, 
                style: style_trackTrack240722131501Track240722131501_4,
                popuplayertitle: "track Track-240722-131501 Track-240722-131501",
                interactive: true,
                title: '<img src="styles/legend/trackTrack240722131501Track240722131501_4.png" /> track Track-240722-131501 Track-240722-131501'
            });
var format_trackTrack240722131501Track240722131501_5 = new ol.format.GeoJSON();
var features_trackTrack240722131501Track240722131501_5 = format_trackTrack240722131501Track240722131501_5.readFeatures(json_trackTrack240722131501Track240722131501_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trackTrack240722131501Track240722131501_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trackTrack240722131501Track240722131501_5.addFeatures(features_trackTrack240722131501Track240722131501_5);
var lyr_trackTrack240722131501Track240722131501_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trackTrack240722131501Track240722131501_5, 
                style: style_trackTrack240722131501Track240722131501_5,
                popuplayertitle: "track Track-240722-131501 Track-240722-131501",
                interactive: true,
                title: '<img src="styles/legend/trackTrack240722131501Track240722131501_5.png" /> track Track-240722-131501 Track-240722-131501'
            });

lyr_GoogleMapsAlternativerendering_0.setVisible(true);lyr_adm_cimahi_rt_cibeureumcopy_1.setVisible(true);lyr_adm_cimahi_rt_cibeureum_2.setVisible(true);lyr_BufferedBufferFirda_3.setVisible(true);lyr_trackTrack240722131501Track240722131501_4.setVisible(true);lyr_trackTrack240722131501Track240722131501_5.setVisible(true);
var layersList = [lyr_GoogleMapsAlternativerendering_0,lyr_adm_cimahi_rt_cibeureumcopy_1,lyr_adm_cimahi_rt_cibeureum_2,lyr_BufferedBufferFirda_3,lyr_trackTrack240722131501Track240722131501_4,lyr_trackTrack240722131501Track240722131501_5];
lyr_adm_cimahi_rt_cibeureumcopy_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_adm_cimahi_rt_cibeureum_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_BufferedBufferFirda_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_trackTrack240722131501Track240722131501_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_trackTrack240722131501Track240722131501_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_cimahi_rt_cibeureumcopy_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_adm_cimahi_rt_cibeureum_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_BufferedBufferFirda_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_trackTrack240722131501Track240722131501_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_trackTrack240722131501Track240722131501_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_adm_cimahi_rt_cibeureumcopy_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_adm_cimahi_rt_cibeureum_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_BufferedBufferFirda_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_trackTrack240722131501Track240722131501_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_trackTrack240722131501Track240722131501_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_trackTrack240722131501Track240722131501_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});