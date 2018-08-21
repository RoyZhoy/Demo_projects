var wms_layers = [];

        var lyr_BasemapGoogleHybrid_0 = new ol.layer.Tile({
            'title': 'BasemapGoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        var lyr_BasemapGooglestreet_1 = new ol.layer.Tile({
            'title': 'BasemapGooglestreet_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_HALocation_2 = new ol.format.GeoJSON();
var features_HALocation_2 = format_HALocation_2.readFeatures(json_HALocation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HALocation_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HALocation_2.addFeatures(features_HALocation_2);cluster_HALocation_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HALocation_2
});var lyr_HALocation_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HALocation_2, 
                style: style_HALocation_2,
                title: '<img src="styles/legend/HALocation_2.png" /> HA Location'
            });var format_EnvironmentalProject_3 = new ol.format.GeoJSON();
var features_EnvironmentalProject_3 = format_EnvironmentalProject_3.readFeatures(json_EnvironmentalProject_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentalProject_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EnvironmentalProject_3.addFeatures(features_EnvironmentalProject_3);cluster_EnvironmentalProject_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_EnvironmentalProject_3
});var lyr_EnvironmentalProject_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_EnvironmentalProject_3, 
                style: style_EnvironmentalProject_3,
                title: '<img src="styles/legend/EnvironmentalProject_3.png" /> Environmental Project'
            });var format_GeotechProject_4 = new ol.format.GeoJSON();
var features_GeotechProject_4 = format_GeotechProject_4.readFeatures(json_GeotechProject_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeotechProject_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeotechProject_4.addFeatures(features_GeotechProject_4);cluster_GeotechProject_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GeotechProject_4
});var lyr_GeotechProject_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GeotechProject_4, 
                style: style_GeotechProject_4,
                title: '<img src="styles/legend/GeotechProject_4.png" /> Geotech Project'
            });

lyr_BasemapGooglestreet_1.setVisible(true);lyr_HALocation_2.setVisible(true);lyr_EnvironmentalProject_3.setVisible(true);lyr_GeotechProject_4.setVisible(true);
var layersList = [lyr_BasemapGoogleHybrid_0,lyr_BasemapGooglestreet_1,lyr_HALocation_2,lyr_EnvironmentalProject_3,lyr_GeotechProject_4];
lyr_HALocation_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Site_ID': 'Site_ID', 'X': 'X', 'Y': 'Y', 'Type': 'Type', 'Status': 'Status', 'Source': 'Source', 'PDF': 'PDF', });
lyr_EnvironmentalProject_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Project_ID': 'Project_ID', 'PM': 'PM', 'Client': 'Client', 'GPS_Coordi': 'GPS_Coordi', 'Path': 'Path', });
lyr_GeotechProject_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Project_ID': 'Project_ID', 'PM': 'PM', 'Client': 'Client', 'GPS_Coordi': 'GPS_Coordi', 'Path': 'Path', 'folder': 'folder', });
lyr_HALocation_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Site_ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Source': 'TextEdit', 'PDF': 'TextEdit', });
lyr_EnvironmentalProject_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Project_ID': 'TextEdit', 'PM': 'TextEdit', 'Client': 'TextEdit', 'GPS_Coordi': 'TextEdit', 'Path': 'TextEdit', });
lyr_GeotechProject_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Project_ID': 'TextEdit', 'PM': 'TextEdit', 'Client': 'TextEdit', 'GPS_Coordi': 'TextEdit', 'Path': 'TextEdit', 'folder': 'TextEdit', });
lyr_HALocation_2.set('fieldLabels', {'OBJECTID': 'no label', 'Site_ID': 'header label', 'X': 'inline label', 'Y': 'inline label', 'Type': 'inline label', 'Status': 'inline label', 'Source': 'inline label', 'PDF': 'no label', });
lyr_EnvironmentalProject_3.set('fieldLabels', {'OBJECTID': 'no label', 'Project_ID': 'header label', 'PM': 'inline label', 'Client': 'inline label', 'GPS_Coordi': 'inline label', 'Path': 'inline label', });
lyr_GeotechProject_4.set('fieldLabels', {'OBJECTID': 'no label', 'Project_ID': 'header label', 'PM': 'inline label', 'Client': 'inline label', 'GPS_Coordi': 'inline label', 'Path': 'no label', 'folder': 'no label', });
lyr_GeotechProject_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});